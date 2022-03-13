<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Kodnificent\JobWatcher\Http\Resources\LogResource;
use Kodnificent\JobWatcher\Models\JobWatcherLog;
use Kodnificent\JobWatcher\QueueListener;

class LogController extends Controller
{
    public function stream(Request $request)
    {
        $log_time = Carbon::now();
        return Response::stream(function () use (&$log_time) {
            while (true) {
                echo ": checking for new logs\n";

                if ( count($logs = $this->latestLogs($log_time)) > 0 ) {
                    $enc_data = json_encode($this->logsResponse($logs));
                    echo "data: $enc_data", "\n\n";
                }

                // flush the output buffer and send echoed messages to the browser
                while (ob_get_level() > 0) {
                    ob_end_flush();
                }

                flush();

                if ( connection_aborted() ) break;

                sleep(3);
            }

        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache'
        ]);
    }

    public function latestLogs(&$log_time) {
        $logs = JobWatcherLog::where('created_at', '>=', $log_time)
            ->orWhere('updated_at', '>=', $log_time)
            ->orderBy('updated_at', 'desc')
            ->orderBy('created_at', 'desc')
            ->orderBy('id', 'desc')
            ->get();

        $log_time = Carbon::now();

        return $logs;
    }

    public function logsResponse($logs)
    {
        $resource = LogResource::collection($logs);
        $data = [
            'logs' => $resource,
            'meta' => [
                'total_jobs_count' => JobWatcherLog::count(),
                'processed_jobs_count' => JobWatcherLog::whereStatus('processed')->count(),
                'failed_jobs_count' => JobWatcherLog::whereStatus('failed')->count(),
            ],
        ];

        return $data;
    }

    public function index(Request $request): JsonResponse
    {
        /** @var \Illuminate\Pagination\Paginator $logs */
        $logs = JobWatcherLog::orderBy('updated_at', 'desc')
            ->orderBy('created_at', 'desc')
            ->orderBy('id', 'desc')
            ->get();

        return new JsonResponse($this->logsResponse($logs));
    }

    public function retry(Request $request, string $uuid): JsonResponse
    {
        /** @var \Illuminate\Queue\Failed\FailedJobProviderInterface */
        $failer = app('queue.failer');
        $job = $failer->find($uuid);

        if (!$job) {
            abort(400, 'A failed job with that uuid does not exist.');
        }

        Artisan::call('queue:retry', ['id' => $job->id]);

        // we ensure that the job has been pushed back onto the queue.
        // the only way we can know for sure is if the job is absent
        // from the failed jobs table

        if ($failer->find($uuid)) {
            abort(400, 'Job retry operation failed with output: ' . Artisan::output());
        }

        return new JsonResponse(['message' => 'Job pushed back onto the queue.']);
    }
}

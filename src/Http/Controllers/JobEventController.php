<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Response;
use Kodnificent\JobWatcher\Http\Resources\JobEventResource;
use Kodnificent\JobWatcher\Models\JobEventModel;
use Kodnificent\JobWatcher\Models\JobModel;

class JobEventController extends Controller
{
    public function stream(Request $request)
    {
        $event_time = Carbon::now();
        return Response::stream(function () use (&$event_time) {
            while (true) {
                echo ": checking for new logs\n";

                if ( count($events = $this->newEvents($event_time)) > 0 ) {
                    $data = json_encode($this->eventsResponse($events));
                    echo "data: $data", "\n\n";
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
            'Cache-Control' => 'no-cache',
            'X-Accel-Buffering' => 'no',
        ]);
    }

    public function newEvents(&$event_time)
    {
        $events = JobEventModel::where('created_at', '>', $event_time)
            ->orderBy('id', 'desc')
            ->get();

        if ($events->count() > 0) {
            $event_time = $events[0]['created_at'];
        }

        return $events;
    }

    public function eventsResponse($events)
    {
        return [
            'data' => JobEventResource::collection($events),
            'meta' => [
                'total_jobs_count' => JobModel::count(),
                'processed_jobs_count' => JobModel::whereStatus('processed')->count(),
                'failed_jobs_count' => JobModel::whereStatus('failed')->count(),
            ]
        ];
    }

    public function index(Request $request): JsonResponse
    {
        $events = JobEventModel::orderBy('id', 'desc')->get();

        return new JsonResponse($this->eventsResponse($events));
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

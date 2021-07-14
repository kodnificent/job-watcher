<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Validator;
use Kodnificent\JobWatcher\Http\Resources\LogResource;
use Kodnificent\JobWatcher\Models\JobWatcherLog;

class LogController extends Controller
{
    public $perPage = 100;

    public function index(Request $request): JsonResponse
    {
        Validator::make($request->all(), ['status' => 'in:processed,pending,failed'])->validate();

        /** @var \Illuminate\Pagination\Paginator $logs */
        $logs = JobWatcherLog::orderBy('updated_at', 'desc')
            ->when($request->query('status'), fn (Builder $q, $status) => $q->where('status', $status))
            ->simplePaginate($this->perPage);

        $resource = LogResource::collection($logs);
        $paginated = $resource->resource->toArray();
        $data = [
            'data' => $resource->resolve($request),
            'links' => [
                'first' => $paginated['first_page_url'] ?? null,
                'last' => $paginated['last_page_url'] ?? null,
                'prev' => $paginated['prev_page_url'] ?? null,
                'next' => $paginated['next_page_url'] ?? null,
            ],
            'meta' => Arr::except($paginated, [
                'data',
                'first_page_url',
                'last_page_url',
                'prev_page_url',
                'next_page_url',
            ])
        ];

        return new JsonResponse($data);
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

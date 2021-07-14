<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Kodnificent\JobWatcher\Http\Resources\LogResource;
use Kodnificent\JobWatcher\Models\JobWatcherLog;

class LogController extends Controller
{
    public $perPage = 100;

    public function index(Request $request)
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
}

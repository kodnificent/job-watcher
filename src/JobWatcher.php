<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Contracts\Queue\Job;
use Illuminate\Foundation\Application as LaravelApplication;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Queue\QueueManager;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Kodnificent\JobWatcher\Models\JobWatcherLog;
use Laravel\Lumen\Application as LumenApplication;

class JobWatcher
{
    /**
     * @var \Illuminate\Support\Facades\App
     */
    protected $app;

    protected $booted = false;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function isLumenApp(): bool
    {
        return $this->app instanceof LumenApplication;
    }

    public function isLaravelApp(): bool
    {
        return $this->app instanceof LaravelApplication;
    }

    /**
     * Get job-watcher configuration value.
     */
    protected function config($key = null, $default = null)
    {
        $keyName = $key ? "job-watcher.$key" : 'job-watcher';

        return config($keyName, $default);
    }

    /**
     * Get the configured route prefix.
     */
    public function routePrefix(): string
    {
        return $this->config('route.prefix') ?: 'job-watcher';
    }

    /**
     * Get the configured route middlewares.
     */
    public function routeMiddlewares(): array
    {
        $middlewares = (array) $this->config('route.middlewares') ?: [];

        return array_merge([], $middlewares);
    }

    public function onBoot(): bool
    {
        if ($this->booted !== false) {
            // jobwatcher has already been booted
            // we don't want this called twice.
            return false;
        }

        // we register queue events
        $this->registerQueueEvents($this->app->make('queue'));

        return $this->booted = true;
    }

    protected function registerQueueEvents(QueueManager $queue): void
    {
        $queue->before(fn (JobProcessing $event) => $this->handleProcessingJob($event));
        $queue->after(fn (JobProcessed $event) => $this->handleProcessedJob($event));
        $queue->failing(fn (JobFailed $event) => $this->handleFailedJob($event));
    }

    protected function handleProcessingJob(JobProcessing $event): void
    {
        $log = new JobWatcherLog;
        $log->uuid = $event->job->payload()['uuid'];
        $log->name = $event->job->resolveName();
        $log->connection = $event->connectionName;
        $log->queue = $event->job->getQueue();
        $log->payload = $this->getJobCommand($event->job);
        $log->exception = null;
        $log->status = 'processing';
        $log->save();
    }

    protected function handleProcessedJob(JobProcessed $event)
    {
        $log = new JobWatcherLog;
        $log->uuid = $event->job->payload()['uuid'];
        $log->name = $event->job->resolveName();
        $log->connection = $event->connectionName;
        $log->queue = $event->job->getQueue();
        $log->payload = $this->getJobCommand($event->job);
        $log->exception = null;
        $log->status = 'processed';
        $log->save();
    }

    protected function handleFailedJob(JobFailed $event)
    {
        $log = new JobWatcherLog;
        $log->uuid = $event->job->payload()['uuid'];
        $log->name = $event->job->resolveName();
        $log->connection = $event->connectionName;
        $log->queue = $event->job->getQueue();
        $log->payload = $this->getJobCommand($event->job);
        $log->exception = $event->exception;
        $log->status = 'failed';
        $log->save();
    }

    protected function getJobCommand(Job $job)
    {
        $data = $job->payload()['data'];

        if (Str::startsWith($data['command'], 'O:')) {
            return unserialize($data['command']);
        }

        throw new \RuntimeException('Unable to extract job payload.');
    }
}

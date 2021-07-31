<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Contracts\Queue\Job;
use Illuminate\Foundation\Application as LaravelApplication;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Queue\QueueManager;
use Illuminate\Support\Str;
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
        $prefix = $this->config('route.prefix') ?: 'job-watcher';

        return Str::startsWith('/', $prefix) ? $prefix : "/$prefix";
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
        $this->registerQueueListeners($this->app->make('queue'));

        return $this->booted = true;
    }

    public function jsConfig(): array
    {
        return [
            'base_path' => $this->routePrefix()
        ];
    }

    protected function registerQueueListeners(QueueManager $queue): void
    {
        $queue->before(fn (JobProcessing $event) => (new QueueListener($event))->listen());
        $queue->after(fn (JobProcessed $event) => (new QueueListener($event))->listen());
        $queue->failing(fn (JobFailed $event) => (new QueueListener($event))->listen());
    }
}

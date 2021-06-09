<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Foundation\Application as LaravelApplication;
use Kodnificent\JobWatcher\Http\Middleware\ViewJobWatcher;
use Laravel\Lumen\Application as LumenApplication;

class JobWatcher
{
    /**
     * @var \Illuminate\Support\Facades\App
     */
    protected $app;

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
}

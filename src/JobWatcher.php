<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Foundation\Application as LaravelApplication;
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

    public function isLumenApp()
    {
        return $this->app instanceof LumenApplication;
    }

    public function isLaravelApp()
    {
        return $this->app instanceof LaravelApplication;
    }

    /**
     * Get job-watcher configuration value.
     */
    public function config($key = null, $default = null)
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
        return (array) $this->config('route.middlewares') ?: [];
    }
}

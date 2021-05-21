<?php

namespace Kodnificent\JobWatcher;

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

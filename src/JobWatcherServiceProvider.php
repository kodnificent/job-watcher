<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class JobWatcherServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->bind('job-watcher', function ($app) {
            return new JobWatcher($app);
        });

        $this->mergeConfigFrom(__DIR__. '/../config/config.php', 'job-watcher');
    }

    public function boot()
    {
        $this->registerPublishables();
        $this->registerRoutes();
    }

    protected function registerPublishables(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/config.php' => config_path('job-watcher.php')
            ], 'config');
        }
    }

    protected function registerRoutes(): void
    {
        Route::group($this->routeConfig(), fn () => $this->loadRoutesFrom(__DIR__ . '/../routes/web.php'));
    }

    protected function routeConfig(): array
    {
        return [
            'prefix' => $this->app->make('job-watcher')->routePrefix(),
            'middlewares' => $this->app->make('job-watcher')->routeMiddlewares(),
        ];
    }
}

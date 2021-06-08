<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Lumen\Routing\Router;

/**
 * @property \Laravel\Lumen\Application|\Illuminate\Support\Facades\App $app
 */
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
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'job-watcher');

        if ($this->app->make('job-watcher')->isLaravelApp()) {
            if ($this->app->runningInConsole()) {
                $this->publishes([
                    __DIR__ . '/../config/config.php' => config_path('job-watcher.php')
                ], 'job-watcher-config');

                $this->publishes([
                    __DIR__ . '/../public' => public_path('vendor/job-watcher')
                ], 'job-watcher-assets');
            }
        }

        elseif ($this->app->make('job-watcher')->isLumenApp()) {
            $this->app->configure('job-watcher');
        }
    }

    protected function registerRoutes(): void
    {
        if ($this->app->make('job-watcher')->isLumenApp()) {
            $this->app->router->group($this->routeConfig(), fn (Router $router) => require __DIR__.'/../routes/lumen-web.php');
        } else {
            Route::middleware($this->app->make('job-watcher')->routeMiddlewares())
            ->prefix($this->app->make('job-watcher')->routePrefix())
            ->namespace('Kodnificent\JobWatcher\Http\Controllers')
            ->group(fn () => $this->loadRoutesFrom(__DIR__ . '/../routes/laravel-web.php'));
        }
    }

    protected function routeConfig(): array
    {
        return [
            'namespace' => 'Kodnificent\JobWatcher\Http\Controllers',
            'prefix' => $this->app->make('job-watcher')->routePrefix(),
            'middlewares' => $this->app->make('job-watcher')->routeMiddlewares(),
        ];
    }
}

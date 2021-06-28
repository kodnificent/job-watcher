<?php

namespace Kodnificent\JobWatcher;

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
        $this->app->singleton('job-watcher', function ($app) {
            return new JobWatcher($app);
        });

        $this->app->singleton('job-watcher:auth', function ($app) {
            return new Auth($app);
        });

        $this->mergeConfigFrom(__DIR__. '/../config/config.php', 'job-watcher');
    }

    public function boot()
    {
        $this->registerPublishables();
        $this->registerRoutes();
        $this->app->make('job-watcher')->onBoot();
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
                    __DIR__ . '/../public/vendor/job-watcher' => public_path('vendor/job-watcher')
                ], 'job-watcher-assets');

                $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
            }
        }

        elseif ($this->app->make('job-watcher')->isLumenApp()) {
            $this->app->configure('job-watcher');
            $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        }
    }

    protected function registerRoutes(): void
    {
        if ($this->app->make('job-watcher')->isLumenApp()) {
            $this->app->router->group($this->routeConfig(), fn (Router $router) => require __DIR__.'/../routes/lumen-web.php');
        } else {
            Route::middleware($this->app->make('job-watcher')->routeMiddlewares())
                ->name('job-watcher.')
                ->prefix($this->app->make('job-watcher')->routePrefix())
                ->namespace('Kodnificent\JobWatcher\Http\Controllers')
                ->group(fn () => $this->loadRoutesFrom(__DIR__ . '/../routes/laravel-web.php'));
        }
    }

    protected function routeConfig(): array
    {
        return [
            'as' => 'job-watcher',
            'namespace' => 'Kodnificent\JobWatcher\Http\Controllers',
            'prefix' => $this->app->make('job-watcher')->routePrefix(),
            'middlewares' => $this->app->make('job-watcher')->routeMiddlewares(),
        ];
    }
}

<?php

namespace Kodnificent\JobWatcher\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static bool isLumenApp()
 * @method static bool isLaravelApp()
 * @method static string routePrefix()
 * @method static array routeMiddlewares()
 *
 * @see \Kodnificent\JobWatcher\JobWatcher
 */
class JobWatcher extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'job-watcher';
    }
}

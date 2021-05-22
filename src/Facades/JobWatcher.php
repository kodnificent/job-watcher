<?php

namespace Kodnificent\JobWatcher\Facades;

use Illuminate\Support\Facades\Facade;

class JobWatcher extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'job-watcher';
    }
}

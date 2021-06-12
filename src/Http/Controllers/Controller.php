<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Kodnificent\JobWatcher\Facades\JobWatcher;

if (JobWatcher::isLaravelApp()) {
    class Controller extends LaravelController {
        protected function isLaravel()
        {
            return true;
        }

        protected function isLumen()
        {
            return false;
        }
    }
} else {
    class Controller extends LumenController {
        protected function isLaravel()
        {
            return false;
        }

        protected function isLumen()
        {
            return true;
        }
    }
}

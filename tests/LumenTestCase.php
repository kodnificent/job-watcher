<?php

namespace Kodnificent\JobWatcher\Tests;

use Anik\Testbench\TestCase;
use Kodnificent\JobWatcher\JobWatcherServiceProvider;

class LumenTestCase extends TestCase
{
    protected function serviceProviders(): array
    {
        return [
            JobWatcherServiceProvider::class,
        ];
    }

    protected function withFacade(): bool
    {
        return true;
    }
}

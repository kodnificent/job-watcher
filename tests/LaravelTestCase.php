<?php

namespace Kodnificent\JobWatcher\Tests;

use Kodnificent\JobWatcher\JobWatcherServiceProvider;
use Orchestra\Testbench\TestCase as TestbenchTestCase;

class LaravelTestCase extends TestbenchTestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    protected function getPackageProviders($app): array
    {
        return [
            JobWatcherServiceProvider::class,
        ];
    }

    protected function getEnvironmentSetUp($app): void
    {
        //
    }
}

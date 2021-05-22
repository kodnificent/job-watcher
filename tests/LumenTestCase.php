<?php

namespace Kodnificent\JobWatcher\Tests;

use Laravel\Lumen\Testing\TestCase;

abstract class LumenTestCase extends TestCase
{
    /**
     * Creates the application.
     *
     * @return \Laravel\Lumen\Application
     */
    public function createApplication()
    {
        return require __DIR__.'/./lumen-bootstrap.php';
    }
}

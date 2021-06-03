<?php

namespace Kodnificent\JobWatcher\Tests\Feature;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Kodnificent\JobWatcher\Tests\LaravelTestCase;

class LaravelDashboardTest extends LaravelTestCase
{
    use WithoutMiddleware;

    public function testLaravelUserCanView_DashboardPage()
    {
        $res = $this->get(app('job-watcher')->routePrefix());
        $res->assertViewIs('job-watcher::shell');
    }
}

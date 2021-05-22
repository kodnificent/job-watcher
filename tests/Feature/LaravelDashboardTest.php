<?php

namespace Kodnificent\JobWatcher\Tests\Feature;

use Kodnificent\JobWatcher\Tests\LaravelTestCase;

class LaravelDashboardTest extends LaravelTestCase
{
    public function testLaravelUserCanView_DashboardPage()
    {
        $res = $this->get(app('job-watcher')->routePrefix());
        $res->assertViewIs('job-watcher::shell');
    }
}

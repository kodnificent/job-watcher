<?php

namespace Kodnificent\JobWatcher\Tests\Feature;

use Kodnificent\JobWatcher\Tests\LumenTestCase;

class LumenDashboardTest extends LumenTestCase
{
    public function testLumenUserCanView_DashboardPage()
    {
        $this->get(app('job-watcher')->routePrefix());
        $this->response->assertViewIs('job-watcher::shell');
    }
}

<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Lumen;

use Kodnificent\JobWatcher\Tests\LumenTestCase;

class DashboardTest extends LumenTestCase
{
    public function testLumenUserCanView_DashboardPage()
    {
        $this->get(app('job-watcher')->routePrefix());

        $this->response
            ->assertSuccessful()
            ->assertViewIs('job-watcher::shell');
    }

    public function testAnyGetRequestTo_JobWatchPrefix_ShouldReturn_AppShellView()
    {
        $this->get(app('job-watcher')->routePrefix() . '/some-random-route/that-is-deeply-nested');


        $this->response
            ->assertSuccessful()
            ->assertViewIs('job-watcher::shell');
    }
}

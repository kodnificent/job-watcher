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
}

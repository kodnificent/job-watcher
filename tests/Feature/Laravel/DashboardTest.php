<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Laravel;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Kodnificent\JobWatcher\Tests\LaravelTestCase;

class DashboardTest extends LaravelTestCase
{
    use WithoutMiddleware;

    public function testLaravelUserCanView_DashboardPage()
    {
        // we manually publish our assets
        // so mix can correctly use manifest.json
        $this->artisan('vendor:publish', ['--tag' => 'job-watcher-assets']);

        $res = $this->get(app('job-watcher')->routePrefix());
        $res->assertSuccessful()
            ->assertViewIs('job-watcher::shell');
    }
}

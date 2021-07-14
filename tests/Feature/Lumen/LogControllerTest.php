<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Lumen;

use Kodnificent\JobWatcher\Models\JobWatcherLog;
use Kodnificent\JobWatcher\Tests\LumenTestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\WithoutMiddleware;

class LogControllerTest extends LumenTestCase
{
    use WithoutMiddleware, DatabaseMigrations;

    public function testLumenUserCan_ViewLogIndex()
    {
        JobWatcherLog::factory()->count(2)->processed()->create();
        JobWatcherLog::factory()->count(2)->processing()->create();
        JobWatcherLog::factory()->count(2)->failed()->create();

        $url = route('job-watcher.api.logs.index');
        $this->get($url);

        $this->response
            ->assertSuccessful()
            ->assertJsonCount(6, 'data');
    }

    public function testLumenUserCan_FilterLogsBy_Status()
    {
        JobWatcherLog::factory()->count(2)->processed()->create();
        JobWatcherLog::factory()->count(1)->processing()->create();
        JobWatcherLog::factory()->count(3)->failed()->create();

        $url = route('job-watcher.api.logs.index', ['status' => 'processed']);
        $this->get($url);

        $this->response
            ->assertSuccessful()
            ->assertJsonCount(2, 'data');
    }
}

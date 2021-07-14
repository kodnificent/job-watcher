<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Laravel;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Kodnificent\JobWatcher\Models\JobWatcherLog;
use Kodnificent\JobWatcher\Tests\LaravelTestCase;

class LogControllerTest extends LaravelTestCase
{
    use WithoutMiddleware, DatabaseMigrations;

    public function testUserCan_ViewLogIndex()
    {
        JobWatcherLog::factory()->count(2)->processed()->create();
        JobWatcherLog::factory()->count(2)->processing()->create();
        JobWatcherLog::factory()->count(2)->failed()->create();

        $url = route('job-watcher.api.logs.index');
        $res = $this->get($url);

        $res->assertSuccessful()
            ->assertJsonCount(6, 'data');
    }

    public function testUserCan_FilterLogsBy_Status()
    {
        JobWatcherLog::factory()->count(2)->processed()->create();
        JobWatcherLog::factory()->count(1)->processing()->create();
        JobWatcherLog::factory()->count(3)->failed()->create();

        $url = route('job-watcher.api.logs.index', ['status' => 'processed']);
        $res = $this->get($url);

        $res->assertSuccessful();
        $res->assertJsonCount(2, 'data');
    }
}

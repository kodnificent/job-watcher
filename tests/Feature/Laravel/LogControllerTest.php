<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Laravel;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Config;
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
            ->assertJsonCount(6, 'logs');
    }

    public function testUserCan_RetryFailedJob()
    {
        include_once __DIR__ . '/../../lumen/database/migrations/2021_07_14_175730_create_failed_jobs_table.php';
        include_once __DIR__ . '/../../lumen/database/migrations/2021_07_14_182046_create_jobs_table.php';
        (new \CreateFailedJobsTable)->up();
        (new \CreateJobsTable)->up();

        Config::set('queue.failed.driver', 'database-uuids');

        /** @var \Illuminate\Queue\Failed\FailedJobProviderInterface */
        $failer = app('queue.failer');
        $uuid = '10-49-j-34';
        $failer->log('database', 'default', json_encode(['uuid' => $uuid]), 'failed for nothing.');
        $url = route('job-watcher.api.logs.retry', ['uuid' => $uuid]);

        $res = $this->post($url);
        $res->assertSuccessful();

        (new \CreateFailedJobsTable)->down();
        (new \CreateJobsTable)->down();
    }
}

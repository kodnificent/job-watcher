<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Laravel;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Config;
use Kodnificent\JobWatcher\Models\JobEventModel;
use Kodnificent\JobWatcher\Models\JobModel;
use Kodnificent\JobWatcher\Tests\LaravelTestCase;

class JobEventControllerTest extends LaravelTestCase
{
    use WithoutMiddleware, DatabaseMigrations;

    public function testUserCan_ViewJobEventsIndex()
    {
        $job = JobModel::factory()->create();
        JobEventModel::factory()->for($job, 'job')->processed()->create();
        JobEventModel::factory()->for($job, 'job')->processing()->create();
        JobEventModel::factory()->for($job, 'job')->failed()->create();

        $url = route('job-watcher.api.job-events.index');
        $res = $this->get($url);

        $res->assertSuccessful()
            ->assertJsonCount(3, 'data');
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
        $url = route('job-watcher.api.job-events.retry', ['uuid' => $uuid]);

        $res = $this->post($url);
        $res->assertSuccessful();

        (new \CreateFailedJobsTable)->down();
        (new \CreateJobsTable)->down();
    }
}

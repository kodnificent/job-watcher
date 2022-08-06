<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Lumen;

use Illuminate\Support\Facades\Config;
use Kodnificent\JobWatcher\Models\JobEventModel;
use Kodnificent\JobWatcher\Models\JobModel;
use Kodnificent\JobWatcher\Tests\LumenTestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\WithoutMiddleware;

class JobEventControllerTest extends LumenTestCase
{
    use WithoutMiddleware, DatabaseMigrations;

    public function testLumenUserCan_ViewJobEventsIndex()
    {
        $job = JobModel::factory()->create();
        JobEventModel::factory()->for($job, 'job')->processed()->create();
        JobEventModel::factory()->for($job, 'job')->processing()->create();
        JobEventModel::factory()->for($job, 'job')->failed()->create();

        $url = route('job-watcher.api.job-events.index');
        $this->get($url);

        $this->response
            ->assertSuccessful()
            ->assertJsonCount(3, 'data');
    }

    public function testLumenUserCan_RetryFailedJob()
    {
        Config::set('queue.failed.driver', 'database-uuids');

        /** @var \Illuminate\Queue\Failed\FailedJobProviderInterface */
        $failer = app('queue.failer');
        $uuid = '10-49-j-34';
        $failer->log('database', 'default', json_encode(['uuid' => $uuid]), 'failed for nothing.');
        $url = route('job-watcher.api.job-events.retry', ['uuid' => $uuid]);

        $this->post($url);
        $this->response->assertSuccessful();
    }
}

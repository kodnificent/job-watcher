<?php

namespace Kodnificent\JobWatcher\Tests\Unit;

use Kodnificent\JobWatcher\Tests\Jobs\FailedJob;
use Kodnificent\JobWatcher\Tests\Jobs\ProcessedJob;
use Kodnificent\JobWatcher\Tests\LumenTestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;

class JobWatcherTest extends LumenTestCase
{
    use DatabaseMigrations;

    public function testProcessingAndProcessedJobs_AreLoggedToTheDatabase()
    {
        $job = new ProcessedJob;
        dispatch($job);

        $this->seeInDatabase('job_watcher_logs', [
            'status' => 'processing',
            'connection' => 'sync',
            'queue' => 'sync',
            'exception' => null
        ]);

        $this->seeInDatabase('job_watcher_logs', [
            'status' => 'processed',
            'connection' => 'sync',
            'queue' => 'sync',
            'exception' => null
        ]);
    }

    public function testFailedJobs_AreLoggedToTheDatabase()
    {
        $job = new FailedJob;
        dispatch($job);

        $this->seeInDatabase('job_watcher_logs', [
            'status' => 'failed',
            'connection' => 'sync',
            'queue' => 'sync',
        ]);
    }
}

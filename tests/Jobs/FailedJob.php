<?php

namespace Kodnificent\JobWatcher\Tests\Jobs;

class FailedJob extends Job
{
    public $data;

    public function __construct($data = null)
    {
        $this->data = $data;
    }

    public function handle()
    {
        $this->fail();
    }
}

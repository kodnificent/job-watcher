<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Contracts\Queue\Job;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Support\Str;
use Kodnificent\JobWatcher\Exceptions\JobWatcherException;
use Kodnificent\JobWatcher\Models\JobWatcherLog;

class QueueListener
{
    /**
     * @var \Illuminate\Queue\Events\JobProcessing|\Illuminate\Queue\Events\JobProcessed|\Illuminate\Queue\Events\JobFailed
     */
    protected $event;

    public function __construct($event)
    {
        if (
            ! ($event instanceof JobProcessing) &&
            ! ($event instanceof JobProcessed) &&
            ! ($event instanceof JobFailed)
            ) {
                throw new JobWatcherException(
                    "event must be an instance of
                    \Illuminate\Queue\Events\JobProcessing or
                    \Illuminate\Queue\Events\JobProcessed or
                    \Illuminate\Queue\Events\JobFailed"
                );
            }

        $this->event = $event;
    }

    public function listen(): void
    {
        JobWatcherLog::updateOrCreate(
            ['uuid' => $this->event->job->uuid()],
            [
                'max_attempts' => $this->event->job->maxTries(),
                'attempts' => $this->event->job->attempts(),
                'uuid' => $this->event->job->uuid(),
                'name' => $this->event->job->resolveName(),
                'connection' => $this->event->connectionName,
                'queue' => $this->event->job->getQueue(),
                'payload' => $this->event->job->payload(),
                'unserialized_data' => $this->getUnserializedData(),
                'exception' => $this->event->exception ?? null,
                'status' => $this->getEventStatus(),
            ]
        );
    }

    public function getEventStatus(): string
    {
        $status = $this->event instanceof JobProcessing
            ? 'processing' : ($this->event instanceof JobProcessed ? 'processed' : 'failed');

        return $status;
    }

    protected function getUnserializedData()
    {
        $data = $this->event->job->payload()['data'];

        if (Str::startsWith($data['command'], 'O:')) {
            return unserialize($data['command']);
        }

        throw new JobWatcherException('Unable to extract job payload.');
    }
}

<?php

namespace Kodnificent\JobWatcher\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Kodnificent\JobWatcher\Models\JobWatcherLog;

class JobWatcherLogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JobWatcherLog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uuid' => Str::uuid(),
            'max_attempts' => 3,
            'attempts' => 1,
            'name' => 'App\Models\FakeJob',
            'connection' => 'redis',
            'queue' => 'default',
            'payload' => ['data' => ['commandName' => 'App\Models\FakeJob']],
            'unserialized_data' => [],
            'exception' => null,
            'status' => 'processed',
        ];
    }

    public function failed()
    {
        return $this->state([
            'status' => 'failed',
            'exception' => 'fake error message',
        ]);
    }

    public function processing()
    {
        return $this->state([
            'status' => 'processing',
        ]);
    }

    public function processed()
    {
        return $this->state([
            'status' => 'processed',
        ]);
    }
}

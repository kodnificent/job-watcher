<?php

namespace Kodnificent\JobWatcher\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Kodnificent\JobWatcher\Models\JobEventModel;

class JobEventModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JobEventModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'status' => 'processed',
        ];
    }

    public function failed()
    {
        return $this->state([
            'status' => 'failed'
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

<?php

namespace Kodnificent\JobWatcher\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kodnificent\JobWatcher\Database\Factories\JobModelFactory;

class JobModel extends Model
{
    use HasFactory { HasFactory::factory as traitFactory; }

    protected $casts = [
        'payload' => 'json',
        'unserialized_data' => 'json'
    ];

    protected $guarded = [];

    public $table = 'job_watcher_jobs';

    public static function factory(...$parameters): JobModelFactory
    {
        return static::traitFactory($parameters);
    }

    protected static function newFactory(): JobModelFactory
    {
        return JobModelFactory::new();
    }
}

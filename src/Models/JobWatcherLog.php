<?php

namespace Kodnificent\JobWatcher\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kodnificent\JobWatcher\Database\Factories\JobWatcherLogFactory;

class JobWatcherLog extends Model
{
    use HasFactory { HasFactory::factory as traitFactory; }

    protected $casts = [
        'payload' => 'json',
        'unserialized_data' => 'json'
    ];

    protected $guarded = [];

    public static function factory(...$parameters): JobWatcherLogFactory
    {
        return static::traitFactory($parameters);
    }

    protected static function newFactory(): JobWatcherLogFactory
    {
        return JobWatcherLogFactory::new();
    }
}

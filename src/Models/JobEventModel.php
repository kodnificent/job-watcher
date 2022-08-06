<?php

namespace Kodnificent\JobWatcher\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Kodnificent\JobWatcher\Database\Factories\JobEventModelFactory;

class JobEventModel extends Model
{
    use HasFactory { HasFactory::factory as traitFactory; }

    protected $guarded = [];

    public $table = 'job_watcher_job_events';

    public static function factory(...$parameters): JobEventModelFactory
    {
        return static::traitFactory($parameters);
    }

    protected static function newFactory(): JobEventModelFactory
    {
        return JobEventModelFactory::new();
    }

    public function job(): BelongsTo
    {
        return $this->belongsTo(JobModel::class, 'job_id');
    }
}

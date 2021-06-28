<?php

namespace Kodnificent\JobWatcher\Models;

use Illuminate\Database\Eloquent\Model;

class JobWatcherLog extends Model
{
    protected $casts = [
        'payload' => 'json'
    ];
}

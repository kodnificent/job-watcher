<?php

return [
    'route' => [
        'prefix' => 'job-watcher',
        'middlewares' => []
    ],
    'auth' => [
        'passphrase' => env('JOBWATCHER_PASSPHRASE'),
    ]
];

<?php

return [
    'route' => [
        'prefix' => 'job-watcher',
        'middlewares' => []
    ],
    'auth' => [
        'signing_key' => env('JOBWATCHER_SIGNING_KEY'),
        'passphrase' => env('JOBWATCHER_PASSPHRASE'),
    ]
];

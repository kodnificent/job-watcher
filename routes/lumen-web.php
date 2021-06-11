<?php

/** @var \Laravel\Lumen\Routing\Router $router*/

$router->group([
    'prefix' => 'api',
    'as' => 'api'
], function () use ($router) {
    $router->get('login', [
        'as' => 'login',
        'uses' => 'LoginController@handle'
    ]);
});

$router->get('', fn () => view('job-watcher::shell'));

<?php

/** @var \Laravel\Lumen\Routing\Router $router*/

$router->group([
    'prefix' => 'api',
    'as' => 'api'
], function () use ($router) {
    $router->post('login', [
        'as' => 'login',
        'uses' => 'AuthController@login'
    ]);
});

$router->get('', fn () => view('job-watcher::shell'));

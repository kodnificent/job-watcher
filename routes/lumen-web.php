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

    $router->post('logout', [
        'as' => 'logout',
        'uses' => 'AuthController@logout'
    ]);
});

$router->get('', fn () => view('job-watcher::shell'));

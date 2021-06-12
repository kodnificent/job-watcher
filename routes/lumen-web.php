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
$router->get('{route: .*}', fn () => view('job-watcher::shell'));

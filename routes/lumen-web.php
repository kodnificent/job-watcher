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

    $router->group([
        'prefix' => 'logs',
        'as' => 'logs',
    ], function () use ($router) {
        $router->get('', ['as' => 'index', 'uses' => 'LogController@index']);
        $router->post('{uuid}/retry', ['as' => 'retry', 'uses' => 'LogController@retry']);
    });
});

$router->get('', fn () => view('job-watcher::shell'));
$router->get('{route: .*}', fn () => view('job-watcher::shell'));

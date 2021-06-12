<?php

use Illuminate\Support\Facades\Route;

Route::name('api.')
    ->prefix('api')
    ->group(function () {
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('logout', 'AuthController@logout')->name('logout');
    });

Route::get('{route?}', fn () => view('job-watcher::shell'))->where(['route' => '.*']);

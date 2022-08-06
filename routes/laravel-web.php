<?php

use Illuminate\Support\Facades\Route;

Route::name('api.')
    ->prefix('api')
    ->group(function () {
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('logout', 'AuthController@logout')->name('logout');

        Route::name('job-events.')
            ->prefix('job-events')
            ->group(function () {
                Route::get('', 'JobEventController@index')->name('index');
                Route::get('stream', 'JobEventController@stream')->name('stream');
                Route::post('{uuid}/retry', 'JobEventController@retry')->name('retry');
            });
    });

Route::get('{route?}', fn () => view('job-watcher::shell'))->where(['route' => '.*']);

<?php

use Illuminate\Support\Facades\Route;

Route::name('api.')
    ->prefix('api')
    ->group(function () {
        Route::post('login', 'AuthController@login')->name('login');
    });

Route::get('', fn () => view('job-watcher::shell'));

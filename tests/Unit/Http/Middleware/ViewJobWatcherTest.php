<?php

namespace Kodnificent\JobWatcher\Tests\Unit\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Kodnificent\JobWatcher\Http\Middleware\ViewJobWatcher;
use Kodnificent\JobWatcher\Tests\LaravelTestCase;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ViewJobWatcherTest extends LaravelTestCase
{
    public function testHandleMethodShould_ThrowHttpException()
    {
        Gate::shouldReceive('allows')->with('viewJobWatcher')->andReturn(false);

        $this->expectException(HttpException::class);

        $request = new Request();
        $middleware = new ViewJobWatcher;
        $middleware->handle($request, function () {});dd('here');
    }

    public function testHandleMethodShouldNot_ThrowHttpException()
    {
        Gate::shouldReceive('allows')->with('viewJobWatcher')->andReturn(true);

        $request = new Request();
        $middleware = new ViewJobWatcher;
        $expectedResponse = true;
        $response = $middleware->handle($request, function () use ($expectedResponse) {
            return $expectedResponse;
        });

        $this->assertEquals($expectedResponse, $response);
    }
}

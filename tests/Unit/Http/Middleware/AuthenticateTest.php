<?php

namespace Kodnificent\JobWatcher\Tests\Unit\Http\Middleware;

use Illuminate\Http\Request;
use Kodnificent\JobWatcher\Http\Middleware\Authenticate;
use Kodnificent\JobWatcher\Tests\LumenTestCase;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthenticateTest extends LumenTestCase
{
    public function testHandleMethod_WithGuestUser_ShouldThrow_HttpException()
    {
        $this->expectException(HttpException::class);

        $request = new Request();
        $middleware = new Authenticate;
        $middleware->handle($request, fn () => true);
    }

    public function testHandleMethod_ShouldPass_AuthUser()
    {
        $client = new \stdClass;
        $client->id = 'randomid';
        $client->username = 'root';
        $client->login_expiry = time() + 3600;

        $request = Request::create('/', 'GET', [], ['job-watcher:auth' => encrypt($client)]);
        $this->app->bind('request', fn () => $request);

        $middleware = new Authenticate;
        $middleware->handle($request, fn () => $this->assertTrue(true));
    }
}

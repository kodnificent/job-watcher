<?php

namespace Kodnificent\JobWatcher\Tests\Unit\Http\Middleware;

use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
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
        $key = 'test';
        $clientId = 'randomid';
        $name = 'root';
        $payload = [
            'sub' => $clientId,
            'user' => $name,
        ];
        $token = JWT::encode($payload, $key);
        Config::set('job-watcher.auth.signing_key', $key);

        $request = Request::create(
            '/', 'GET', [], [], [], [
                'HTTP_Authorization' => "Bearer $token"
            ]
        );
        $this->app->bind('request', fn () => $request);
        $middleware = new Authenticate;
        $middleware->handle($request, fn () => $this->assertTrue(true));
    }
}

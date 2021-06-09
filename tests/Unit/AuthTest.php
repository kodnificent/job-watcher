<?php

namespace Kodnificent\JobWatcher\Tests\Unit;

use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Kodnificent\JobWatcher\Auth;
use Kodnificent\JobWatcher\Tests\LumenTestCase;

class AuthTest extends LumenTestCase
{
    public function testClientMethod_WithBearerToken_ShouldReturn_ValidClient()
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

        $auth = new Auth($this->app);
        $client = $auth->client();

        $this->assertEquals($client->id, $clientId);
        $this->assertEquals($client->user, $name);
    }

    public function testClientMethod_WithoutAuthBearerToken_ShouldReturn_Null()
    {
        $auth = new Auth($this->app);
        $client = $auth->client();

        $this->assertNull($client);
    }

    public function testIsGuestMethod_ShouldReturn_True()
    {
        $auth = new Auth($this->app);
        $this->assertTrue($auth->isGuest());
    }

    public function testValidateMethod_ShouldReturnTrue_WithValidData()
    {
        $auth = new Auth($this->app);
        $this->assertTrue($auth->validate(config('job-watcher.auth.passphrase'), 'root'));
    }

    public function testValidateMethod_ShouldReturnFalse_WithInvalidData()
    {
        $auth = new Auth($this->app);
        $this->assertFalse($auth->validate('wrongPassword'), 'guest');
    }

    public function testLoginMethod_ShouldLogin_And_GenerateToken()
    {
        $auth = new Auth($this->app);
        $user = $auth->login();
        $this->assertNotNull($user->token);
    }
}

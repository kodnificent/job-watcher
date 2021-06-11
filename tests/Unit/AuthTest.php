<?php

namespace Kodnificent\JobWatcher\Tests\Unit;

use Illuminate\Http\Request;
use Kodnificent\JobWatcher\Auth;
use Kodnificent\JobWatcher\Tests\LumenTestCase;

class AuthTest extends LumenTestCase
{
    public function testClientMethod_WithHttpCookie_ShouldReturn_ValidClient()
    {
        $client = new \stdClass;
        $client->id = 'randomid';
        $client->username = 'root';
        $client->login_expiry = time() + 3600;

        $request = Request::create('/', 'GET', [], ['job-watcher:auth' => encrypt($client)]);
        $this->app->bind('request', fn () => $request);

        $auth = new Auth($this->app);
        $authClient = $auth->client();

        $this->assertEquals($authClient->id, $client->id);
        $this->assertEquals($authClient->username, $client->username);
    }

    public function testClientMethod_WithoutHttpCookie_ShouldReturn_Null()
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

    public function testLoginMethod_ShouldLogin_And_SetCookie()
    {
        $auth = new Auth($this->app);
        $auth->login();

        $auth->assertCookieSet();
    }
}

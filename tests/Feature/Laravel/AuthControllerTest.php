<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Laravel;

use Illuminate\Support\Facades\Config;
use Kodnificent\JobWatcher\Facades\Auth;
use Kodnificent\JobWatcher\Tests\LaravelTestCase;

class AuthControllerTest extends LaravelTestCase
{
    public function testLaravelUserCan_LoginSuccessfully()
    {
        Config::set('job-watcher.auth.passphrase', 'password');

        $res = $this->post(route('job-watcher.api.login'), [
            'username' => 'root',
            'password' => 'password',
        ]);

        $res->assertSuccessful()
            ->assertJsonStructure(['message', 'client']);

        Auth::assertCookieSet();
    }

    public function testLaravelUserCan_LogoutSuccessfully()
    {
        $res = $this->post(route('job-watcher.api.logout'));
        $res->assertSuccessful();

        Auth::assertCookieNotSet();
    }
}

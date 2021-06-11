<?php

namespace Kodnificent\JobWatcher\Tests\Feature\Lumen;

use Illuminate\Support\Facades\Config;
use Kodnificent\JobWatcher\Facades\Auth;
use Kodnificent\JobWatcher\Tests\LumenTestCase;

class AuthControllerTest extends LumenTestCase
{
    public function testLumenUserCan_LoginSuccessfully()
    {
        Config::set('job-watcher.auth.passphrase', 'password');

        $this->post(route('job-watcher.api.login'), [
            'username' => 'root',
            'password' => 'password',
        ]);

        $this->response->assertSuccessful();

        Auth::assertCookieSet();
    }
}

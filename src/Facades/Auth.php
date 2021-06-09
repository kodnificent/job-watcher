<?php

namespace Kodnificent\JobWatcher\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static bool isGuest() Check if there is no auth user.
 * @method static null|string id() Get the id of the authenticated client.
 * @method static null|\stdClass client() Get the currently authenticated client.
 *
 * @see \Kodnificent\JobWatcher\Auth
 */
class Auth extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'job-watcher:auth';
    }
}

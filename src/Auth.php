<?php

namespace Kodnificent\JobWatcher;

use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use Illuminate\Testing\Assert;
use Kodnificent\JobWatcher\Exceptions\AuthException;
use Kodnificent\JobWatcher\Facades\JobWatcher;
use stdClass;

class Auth
{
    /**
     * @var \Illuminate\Support\Facades\App
     */
    protected $app;

    /**
     * @return null|\stdClass
     */
    protected $client = null;

    protected $cookieSet = false;

    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Get the currently authenticated client.
     *
     * @return null|\stdClass
     */
    public function client()
    {
        // if client has already been set
        // we return the client.
        if (null !== $this->client) {
            return $this->client;
        }

        $cookie = Request::cookie($this->cookieName());

        if (! $cookie) {
            return null;
        }

        try {
            $this->client = decrypt($cookie);
        } catch (DecryptException $e) {
            return null;
        }

        return $this->client;
    }

    /**
     * Get the id of the authenticated client.
     *
     * @return null|string
     */
    public function id()
    {
        return optional($this->client())->id;
    }

    /**
     * Check if there is no auth user.
     */
    public function isGuest(): bool
    {
        return (bool) $this->client() === false;
    }

    /**
     * Attempt to validate a user's credentials.
     */
    public function validate(string $passphrase, string $username = 'root'): bool
    {
        return $username === 'root' && $passphrase === $this->passphrase();
    }

    /**
     * Creates an auth user and sets a http only cookie.
     * When $rememberLogin is set to true, cookie is set to expire after 5 years.
     */
    public function login(bool $rememberLogin = false): object
    {
        // if the remember variable is set to true,
        // we want to remember the client for 5 years
        // else we set the cookie to last for only an hour.
        $seconds = $rememberLogin ? 157248000 : 3600;
        $expiry = time() + $seconds;
        $id = Str::random(10);

        $client = new stdClass;
        $client->id = $id;
        $client->username = 'root';
        $client->login_expiry = $expiry;

        $this->setCookie($client, $expiry);

        return $this->client = $client;
    }

    public function logout(): void
    {
        $this->unsetCookie();
    }

    /**
     * Assert that the login cookie has been set.
     */
    public function assertCookieSet(): void
    {
        Assert::assertTrue($this->cookieSet, 'No cookie has been set.');
    }

    /**
     * Assert that the login cookie is not set.
     */
    public function assertCookieNotSet(): void
    {
        Assert::assertFalse($this->cookieSet, 'Login cookie has been set.');
    }

    protected function unsetCookie(): void
    {
        setcookie($this->cookieName(), null, time() - 157248000);
        $this->cookieSet = false;
    }

    protected function setCookie($payload, int $expires): void
    {
        $path = JobWatcher::routePrefix();
        $secure = $this->app->environment() === 'production' ? true : false;
        $httponly = true;
        $payload = encrypt($payload);

        if (! setcookie($this->cookieName(), $payload, $expires, $path, '', $secure, $httponly) ) {
            $this->throwException('failed to set cookie.');
        }

        $this->cookieSet = true;
    }

    protected function cookieName(): string
    {
        return 'job-watcher:auth';
    }

    protected function passphrase(): string
    {
        $phrase = config('job-watcher.auth.passphrase') ?: $this->throwException('Job watcher passphrase not found.');

        return $phrase;
    }

    protected function throwException(string $message)
    {
        throw new AuthException($message);
    }
}

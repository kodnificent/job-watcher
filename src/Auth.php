<?php

namespace Kodnificent\JobWatcher;

use Firebase\JWT\JWT;
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

        $request = $this->app->make('request');
        $token = $request->bearerToken();

        if (! $token) {
            return null;
        }

        try {
            $jwt = $this->decodeToken($token);
        } catch (\Throwable $e) {
            // token is invalid, we return no client
            return null;
        }

        $this->client = new stdClass;
        $this->client->id = $jwt->sub;
        $this->client->name = $jwt->user;
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

    protected function config($key = null, $default = null)
    {
        $keyName = $key ? "job-watcher.auth.$key" : 'job-watcher.auth';

        return config($keyName, $default);
    }

    protected function decodeToken($token): object
    {
        return JWT::decode($token, $this->signingKey(), ['HS256']);
    }

    protected function signingKey(): string
    {
        $signingKey = $this->config('signing_key') ?: $this->throwException('JobWatcher Signing key not found.');

        return $signingKey;
    }

    protected function passphrase(): string
    {
        $phrase = $this->config('passphrase') ?: $this->throwException('Job watcher passphrase not found.');

        return $phrase;
    }

    protected function throwException($message)
    {
        throw new AuthException($message);
    }
}

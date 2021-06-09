<?php

namespace Kodnificent\JobWatcher\Http\Middleware;

use Closure;
use Kodnificent\JobWatcher\Facades\Auth;

class Authenticate
{
    public function handle($request, Closure $next)
    {
        if (Auth::isGuest()) {
            abort(401, 'Unauthorized.');
        }

        return $next($request);
    }
}

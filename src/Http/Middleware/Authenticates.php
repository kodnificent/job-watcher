<?php

namespace Kodnificent\JobWatcher\Http\Middleware;

use Closure;
use Kodnificent\JobWatcher\Facades\Auth;

class Authenticates
{
    public function handle($request, Closure $next)
    {
        if (Auth::isGuest()) {
            abort(401, 'Unauthorized.');
        }

        return $next($request);
    }
}

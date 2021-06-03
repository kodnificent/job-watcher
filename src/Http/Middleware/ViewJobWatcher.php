<?php

namespace Kodnificent\JobWatcher\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Gate;

class ViewJobWatcher
{
    public function handle($request, Closure $next)
    {
        if (! Gate::allows('viewJobWatcher')) {
            abort(403);
        }

        return $next($request);
    }
}

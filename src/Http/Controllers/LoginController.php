<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Kodnificent\JobWatcher\Facades\Auth;

class LoginController extends Controller
{
    public function handle(Request $request): JsonResponse
    {
        Validator::make($request->all(), $this->rules())->validate();

        if (! Auth::validate($request->password, $request->user)) {
            throw ValidationException::withMessages([
                'credentials' => 'Invalid credentials',
            ]);
        }

        $client = Auth::login();

        return response()->json([
            'message' => 'Login successful.',
            'data' => [
                'user' => $client->username,
            ]
        ]);
    }

    protected function rules(): array
    {
        return [
            'username' => 'required',
            'password' => 'required',
        ];
    }
}

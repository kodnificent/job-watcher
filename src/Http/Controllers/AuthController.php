<?php

namespace Kodnificent\JobWatcher\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Kodnificent\JobWatcher\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        Validator::make($request->all(), $this->rules())->validate();

        if (! Auth::validate($request->password, $request->username)) {
            throw ValidationException::withMessages([
                'credentials' => 'Invalid credentials',
            ]);
        }

        $client = Auth::login();

        return new JsonResponse([
            'message' => 'Login successful.',
            'client' => $client,
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

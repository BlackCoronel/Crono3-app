<?php

namespace App\Http\Controllers\Authenticacion;

use App\Http\Controllers\Controller;
use App\Http\Validators\LoginRequestValidator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(LoginRequestValidator $loginRequestValidator): JsonResponse
    {
        $credentials = [
            'email' => $loginRequestValidator->input('email'),
            'password' => $loginRequestValidator->input('password'),
        ];

        $token = Auth::attempt($credentials);

        $user = Auth::user();

        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
}

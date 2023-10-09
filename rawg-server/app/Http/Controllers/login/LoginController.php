<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\login\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Helpers\ApiHelper;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class LoginController extends Controller
{

    public function index(LoginRequest $request)
    {
        $userEmail = $request->input('email');
        $userPassword = $request->input('password');

        $userToLogin = User::where('email', $userEmail)->first();



        if ($userToLogin != null) {
            if (Hash::check($userPassword, $userToLogin->password)) {
                $now = Carbon::now();
                $expirationTime = $now->copy()->addDays(30)->timestamp;
                $userPayload = [
                    "iat" => Carbon::now()->copy()->timestamp,
                    "exp" => $expirationTime,
                    "id" => $userToLogin->user_id,
                    "name" => $userToLogin->name,
                    "email" => $userToLogin->email
                ];

                $jwt = JWT::encode($userPayload, env('JWT_KEY'), 'HS256');

                $userToLogin->api_token = Str::random(40);
                $userToLogin->save();

                return response()->json(ApiHelper::success(data: [
                    "apiToken" => $jwt,
                ]));
            } else {
                return response()->json(ApiHelper::error(errorMessage: config('apierrormessages.invalid_credentials')));
            }
        } else {
            return response()->json(ApiHelper::error(errorMessage: config('apierrormessages.invalid_credentials')));
        }
    }
}

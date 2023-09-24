<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\login\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Helpers\ApiHelper;
use Illuminate\Support\Str;


class LoginController extends Controller
{
    //
    public function index(LoginRequest $request)
    {
        $userEmail = $request->input('email');
        $userPassword = $request->input('password');

        $userToLogin = User::where('email', $userEmail)->first();

        if ($userToLogin != null) {
            if (Hash::check($userPassword, $userToLogin->password)) {
                $userToLogin->api_token = Str::random(40);
                $userToLogin->save();

                return response()->json(ApiHelper::success(data: [
                    "apiToken" => $userToLogin->api_token,
                ]));
            } else {
                return response()->json(ApiHelper::error(errorMessage: config('apierrormessages.invalid_credentials')));
            }
        } else {
            return response()->json(ApiHelper::error(errorMessage: config('apierrormessages.invalid_credentials')));
        }
    }
}

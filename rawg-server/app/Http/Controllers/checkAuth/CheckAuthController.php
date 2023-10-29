<?php

namespace App\Http\Controllers\checkAuth;

use App\Helpers\ApiHelper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;

class CheckAuthController extends Controller
{
    //
    public function index(Request $request)
    {

        try {
            $token = $_COOKIE[env('APP_COOKIE_NAME')] ?? $request->input('APP_JWT');

            if ($token === null) {
                return response()->json(ApiHelper::success(), 403);
            }

            $decodedToken = (array) JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));


            $user = User::where('email', $decodedToken['email'])->first();

            if ($user === null) {
                return response()->json(ApiHelper::success(), 403);
            }

            if ($user->email === $decodedToken['email'] && $user->name === $decodedToken['name']) {
                return response()->json(ApiHelper::success(), 200);
            } else {
                return response()->json(ApiHelper::success(), 403);
            }
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error(), 403);
        }
    }
}

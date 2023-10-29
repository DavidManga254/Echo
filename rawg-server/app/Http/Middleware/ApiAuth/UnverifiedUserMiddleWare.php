<?php

namespace App\Http\Middleware\ApiAuth;

use App\Helpers\ApiHelper;
use App\Models\User;
use Closure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UnverifiedUserMiddleWare
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $cookie = $request()->cookie(env('APP_COOKIE')) ?? $request->input('APP_JWT');

        dd($cookie);
        return $token = $request->bearerToken();

        if ($token === null) {
            return response()->json(ApiHelper::error(), 403);
        }

        try {
            $decodedToken = (array) JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));


            $user = User::where('email', $decodedToken['email'])->first();

            if ($user === null) {
                return response()->json(ApiHelper::error(), 403);
            }

            if ($user->email === $decodedToken['email'] && $user->name === $decodedToken['name']) {
                return $next($request);
            } else {
                return response()->json(ApiHelper::error(), 403);
            }
        } catch (\Firebase\JWT\ExpiredException $e) {
            return response()->json(ApiHelper::error(), 403);
        }
    }
}

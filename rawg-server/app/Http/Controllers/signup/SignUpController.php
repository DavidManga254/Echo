<?php

namespace App\Http\Controllers\signup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\signup\SignupRequest;
use App\Models\RegisterUser\RegisterUser;
use App\Helpers\ApiHelper;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SignUpController extends Controller
{
    //
    public function index(SignupRequest $request)
    {
        $userEmail = $request->input('email');
        $userFirstName = $request->input('firstname');
        $userSecondName = $request->input('secondname');
        $userPassword = $request->input('password');

        $doesUserExist = RegisterUser::where('email', $userEmail)->count();

        if ($doesUserExist != 0) {
            $newUserToRegister = new RegisterUser();

            $newUserToRegister->first_name = $userFirstName;
            $newUserToRegister->second_name = $userSecondName;
            $newUserToRegister->email = $userEmail;
            $newUserToRegister->password = Hash::make($userPassword);
            $newUserToRegister->token = Str::random(40);

            $newUserToRegister->save();
        } else {
            return response()->json(ApiHelper::error(errorMessage: config('apiErrorMessages.already_registered_email')));
        }
    }
}

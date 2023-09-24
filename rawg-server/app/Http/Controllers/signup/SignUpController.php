<?php

namespace App\Http\Controllers\signup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\signup\SignupRequest;
use App\Models\RegisterUser\RegisterUser;
use App\Helpers\ApiHelper;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\SignUp\SignUpMail;

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

        if ($doesUserExist == 0) {
            $newUserToRegister = new RegisterUser();

            $newUserToRegister->first_name = $userFirstName;
            $newUserToRegister->second_name = $userSecondName;
            $newUserToRegister->email = $userEmail;
            $newUserToRegister->password = Hash::make($userPassword);
            $newUserToRegister->token = Str::random(40);

            $newUserToRegister->save();


            Mail::to($userEmail)->send(new SignUpMail($newUserToRegister->token));

            return response()->json(ApiHelper::success(message: config('emails.verification_email_sent')));
        } else {
            return response()->json(ApiHelper::error(errorMessage: config('apierrormessages.email_already_taken')));
        }
    }
}

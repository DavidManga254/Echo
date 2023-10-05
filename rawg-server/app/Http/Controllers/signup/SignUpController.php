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
use App\Http\Requests\signup\RegisterUserRequest;
use App\Models\User;
use Carbon\Carbon;

class SignUpController extends Controller
{
    //
    public function index(SignupRequest $request)
    {
        $userEmail = $request->input('email');
        $userFirstName = $request->input('firstname');
        $userSecondName = $request->input('secondname');
        $userPassword = $request->input('password');

        $doesUserExistInWait = RegisterUser::where('email', $userEmail)->count();
        $isUserAlreadyRegisterd = User::where('email', $userEmail)->count();

        if ($doesUserExistInWait == 0 && $isUserAlreadyRegisterd == 0) {
            $newUserToRegister = new RegisterUser();

            $newUserToRegister->first_name = $userFirstName;
            $newUserToRegister->second_name = $userSecondName;
            $newUserToRegister->email = $userEmail;
            $newUserToRegister->password = Hash::make($userPassword);
            $newUserToRegister->token = Str::random(40);

            $newUserToRegister->save();


            Mail::to($userEmail)->send(new SignUpMail($newUserToRegister->token, $newUserToRegister->email));

            return response()->json(ApiHelper::success(message: config('emails.verification_email_sent')));
        } else {
            return response()->json(ApiHelper::error(errorMessage: config('apierrormessages.email_already_taken')));
        }
    }
    public function registerUser(RegisterUserRequest $request, $token)
    {
        $userEmail = $request->input('email');

        $userWaitingForConfirmation = RegisterUser::where('email', $userEmail)->first();

        if ($userWaitingForConfirmation->email == $userEmail && $userWaitingForConfirmation->token == $token) {
            $newRegisteredUser = new User();

            $firstName = $userWaitingForConfirmation->first_name;
            $secondName = $userWaitingForConfirmation->second_name;
            $newRegisteredUser->name = "$firstName $secondName";
            $newRegisteredUser->email = $userWaitingForConfirmation->email;
            $newRegisteredUser->email_verified_at = Carbon::now();
            $newRegisteredUser->password = $userWaitingForConfirmation->password;
            $newRegisteredUser->user_id = Str::uuid();
            $newRegisteredUser->api_token =  Str::random(40);

            $newRegisteredUser->save();

            $userWaitingForConfirmation->delete();

            return response()->json(ApiHelper::success(message: config('usermessages.sign_up_successful')));
        } else {
            return response()->json(Apihelper::error(message: config('apierrormessages.invalid_credentials')));
        }
    }
}

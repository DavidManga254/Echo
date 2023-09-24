<?php

namespace App\Http\Controllers\signup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\signup\SignupRequest;

class SignUpController extends Controller
{
    //
    public function index(SignupRequest $request)
    {
        dd('hello');
    }
}

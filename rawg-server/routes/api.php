<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/keeper', [DataController::class, 'index']);

/*
|--------------------------------------------------------------------------
| None protected routes
|--------------------------------------------------------------------------
*/

Route::group(['namespace' => 'App\Http\Controllers\signup'], function () {
    Route::post('/signup', 'SignupController@index');
});
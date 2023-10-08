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

// Route::get('/insert', 'App\Http\Controllers\DataController@index');


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

/*
|--------------------------------------------------------------------------
| None protected routes
|--------------------------------------------------------------------------
*/

//Signup routes
Route::group(['namespace' => 'App\Http\Controllers\signup'], function () {
    Route::post('/signup', 'SignupController@index');
    Route::post('signup/confirmEmail/{token}', 'SignUpController@registerUser');
});

//login route
Route::post('/login', 'App\Http\Controllers\login\LoginController@index');

/*
|--------------------------------------------------------------------------
| protected routes
|--------------------------------------------------------------------------
*/
Route::middleware('auth:api')->group(function () {
    //get games by page
    Route::get('/games/{page}', 'App\Http\Controllers\GamesController\GamesController@index');

    //game details
    Route::get('/games/info/{slug}', 'App\Http\Controllers\gameDetails\GameDetailsController@index');

    //Games by tag
    Route::get('games/genre/{genreSlug}', 'App\Http\Controllers\CategoryGames\CategoryGamesController@index');
});

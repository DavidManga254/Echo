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
//check if verified
Route::get('/checkAuth', 'App\Http\Controllers\checkAuth\CheckAuthController@index');

//Signup routes
Route::group(['namespace' => 'App\Http\Controllers\signup'], function () {
    Route::post('/signup', 'SignupController@index');
    Route::post('/signup/confirmEmail/{token}', 'SignUpController@registerUser');
});

//login route
Route::post('/login', 'App\Http\Controllers\login\LoginController@index');

/*
|--------------------------------------------------------------------------
| protected routes
|--------------------------------------------------------------------------
*/
Route::middleware('jwt.auth')->group(function () {
    //games
    Route::get('/games', 'App\Http\Controllers\GamesController\GamesController@index');
    Route::get('/games/info/{slug}', 'App\Http\Controllers\GamesController\GamesController@gameDetails');
    Route::get('/games/search/{gameName}', 'App\Http\Controllers\GamesController\GamesController@searchGame');


    //Games by genre
    Route::get('/genre', 'App\Http\Controllers\CategoryController\CategoryController@index');
    Route::get('/genre/{genreSlug}', 'App\Http\Controllers\CategoryController\CategoryController@gamesByGenre');

    //platforms
    Route::get('/platform', 'App\Http\Controllers\PlatformController\PlatformController@index');
    Route::get('/platform/{platformSlug}', 'App\Http\Controllers\PlatformController\PlatformController@getGamesByPlatform');

    //store
    Route::get('/store', 'App\Http\Controllers\StoreController\StoreController@index');
    Route::get('/store/{storeSlug}', 'App\Http\Controllers\StoreController\StoreController@getGamesByStore');

    //search
});

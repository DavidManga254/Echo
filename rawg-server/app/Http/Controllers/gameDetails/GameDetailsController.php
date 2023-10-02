<?php

namespace App\Http\Controllers\gameDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\game\Game;

class GameDetailsController extends Controller
{
    //
    public function index(Request $request, $slug)
    {

        $game = Game::where('slug', $slug)->first();

        dd($game);
    }
}

<?php

namespace App\Http\Controllers\gameDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\game\Game;
use App\Helpers\ApiHelper;

class GameDetailsController extends Controller
{
    //
    public function index(Request $request, $slug)
    {
        try {
            $game = Game::where('slug', $slug)
                ->with('screenshots')
                ->with('tags')
                ->with('stores')
                ->with('platforms')
                ->first();

            return response()->json(ApiHelper::success(data: $game));
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error());
        }
    }
}

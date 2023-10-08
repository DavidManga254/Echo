<?php

namespace App\Http\Controllers\GamesController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\game\Game;
use App\Helpers\ApiHelper;

class GamesController extends Controller
{
    //
    public function index(Request $request, $page)
    {
        // $gamesList = Game::orderBy('released', 'desc')->paginate(10);

        $gamesList = Game::orderBy('released', 'desc')->paginate(config('pagination.per_page'), ['*'], 'page', $page);

        $gameListData = $gamesList->items();

        if (!empty($gameListData)) {
            return response()->json(ApiHelper::success(data: $gameListData));
        } else {
            return response()->json(ApiHelper::success(data: []));
        }
    }

    public function gameDetails(Request $request, $slug)
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

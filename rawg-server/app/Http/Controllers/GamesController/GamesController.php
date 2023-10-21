<?php

namespace App\Http\Controllers\GamesController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\game\Game;
use App\Helpers\ApiHelper;
use App\Http\Resources\games\GamesResource;
use App\Http\Resources\games\GameDetailResource;

class GamesController extends Controller
{
    //
    public function index(Request $request)
    {
        $page = $request->input('page');

        $gamesList = Game::orderBy('released', 'desc')->paginate(config('pagination.per_page'), ['*'], 'page', $page);

        $gameListData = $gamesList->items();
        $page = $page + 1;
        if (!empty($gameListData)) {
            return response()->json(ApiHelper::success(data: [
                "next" => "games?page=$page",
                "data" => GamesResource::collection($gameListData)
            ]));
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
                ->with('genre')
                ->first();

            return response()->json(ApiHelper::success(data: new GameDetailResource($game)));
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error());
        }
    }

    public function searchGame(Request $request, $gameName)
    {
        try {
            $page = $request->input('page');
            $order = $request->input('order');

            $gameSearchQuery = Game::where('name', 'LIKE', '%' . $gameName . '%');


            switch ($order) {
                case 'releaseDate':
                    $gameSearchQuery = $gameSearchQuery->orderBy('released', 'desc');
                    break;

                case 'rating':
                    $gameSearchQuery = $gameSearchQuery->orderBy('rating', 'desc');
                    break;

                default:
                    break;
            }

            $games = $gameSearchQuery->paginate(config('pagination.per_page'), ['*'], 'page', $page);

            return response()->json(ApiHelper::success(data: GamesResource::collection($games->items())));
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error(message: config('apierrormessages.platform_not_exist')), 404);
        }
    }
}

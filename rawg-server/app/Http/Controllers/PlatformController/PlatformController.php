<?php

namespace App\Http\Controllers\PlatformController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plartform\Plartform;
use App\Http\Resources\platform\PlatformResource;
use App\Helpers\ApiHelper;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\Resources\games\GamesResource;

class PlatformController extends Controller
{
    //
    public function index(Request $request)
    {
        try {
            $platfroms = Plartform::all();

            return response()->json(ApiHelper::success(data: PlatformResource::collection($platfroms)));
        } catch (\Exception $e) {
        }
    }

    public function getGamesByPlatform(Request $request, $platformSlug)
    {
        try {
            $page = $request->input('page');
            $order = $request->input('order');
            $games = null;


            $platform = Plartform::where('slug', $platformSlug)->first();

            if ($platform === null) {
                throw new NotFoundHttpException();
            }

            switch ($order) {
                case 'releaseDate':
                    $games = $platform->games()->orderBy('released', 'desc')->with('genre')
                        ->inRandomOrder();
                    break;

                case 'rating':
                    $games = $platform->games()->orderBy('rating', 'desc')->with('genre')
                        ->inRandomOrder();
                    break;

                default:
                    $games = $platform->games()->with('genre')
                        ->inRandomOrder();
                    break;
            }
            $page = $page + 1;




            $games = $games->paginate(config('pagination.per_page'), ['*'], 'page', $page);
            $gameListData = $games->items();

            if (!empty($gameListData)) {
                return response()->json(ApiHelper::success(data: [
                    "next" => "/platform/$platformSlug?=page$page",
                    "data" => GamesResource::collection($gameListData)
                ]));
            } else {
                return response()->json(ApiHelper::success(data: []));
            }
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error(message: config('apierrormessages.platform_not_exist')), 404);
        }
    }
}

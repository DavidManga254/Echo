<?php

namespace App\Http\Controllers\StoreController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\store\Store;
use App\Helpers\ApiHelper;
use  App\Http\Resources\store\StoreResource;
use App\Http\Resources\games\GamesResource;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class StoreController extends Controller
{
    public function index(Request $request)
    {
        try {
            $platfroms = Store::all();

            return response()->json(ApiHelper::success(data: StoreResource::collection($platfroms)));
        } catch (\Exception $e) {
        }
    }

    public function getGamesByStore(Request $request, $storeSlug)
    {
        try {
            $page = $request->input('page') ?? 1;
            $order = $request->input('order');
            $games = null;


            $store = Store::where('slug', $storeSlug)->first();

            if ($store === null) {
                throw new NotFoundHttpException();
            }

            switch ($order) {
                case 'releaseDate':
                    $games = $store->games()->orderBy('released', 'desc')->with('genre')
                        ->inRandomOrder();
                    break;

                case 'rating':
                    $games = $store->games()->orderBy('rating', 'desc')->with('genre')
                        ->inRandomOrder();
                    break;

                default:
                    $games = $store->games()->with('genre')
                        ->inRandomOrder();
                    break;
            }


            $games = $games->paginate(config('pagination.per_page'), ['*'], 'page', $page);

            return response()->json(ApiHelper::success(data: GamesResource::collection($games->items())));
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error(message: config('apierrormessages.store_not_exist')), 404);
        }
    }
}

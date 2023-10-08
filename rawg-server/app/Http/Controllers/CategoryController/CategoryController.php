<?php

namespace App\Http\Controllers\CategoryController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\ApiHelper;
use App\Models\tag\Tag;
use App\Models\genre\Genre;
use App\Http\Resources\games\GamesResource;
use App\Http\Resources\genre\GenreResource;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use function PHPUnit\Framework\throwException;

class CategoryController extends Controller
{
    //
    public function index(Request $request)
    {
        try {
            $genres = Genre::all();

            return response()->json(ApiHelper::success(data: GenreResource::collection($genres)));
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error(), 404);
        }
    }

    public function gamesByGenre(Request $request, $genreSlug)
    {
        try {
            $page = $request->input('page');

            $genre = Genre::where('slug', $genreSlug)->first();

            if ($genre === null) {
                throw new NotFoundHttpException();
            }
            $games = $genre->games()->with('genre')
                ->paginate(config('pagination.per_page'), ['*'], 'page', $page);

            return response()->json(ApiHelper::success(data: GamesResource::collection($games->items())));
        } catch (\Exception $e) {
            return response()->json(ApiHelper::error(message: config('apierrormessages.genre_not_exist')), 404);
        }
    }
}

<?php

namespace App\Http\Controllers\CategoryGames;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\ApiHelper;
use App\Models\tag\Tag;

class CategoryGamesController extends Controller
{
    //
    public function index(Request $request, $categoryID)
    {
        try {
            $page = $request->input('page');

            $category = Tag::where('id', 'LIKE', '%' . $categoryID . '%')->get();
            // $games = $category->games()->paginate(config('pagination.per_page'), ['*'], 'page', $page);


            // ->paginate(config('pagination.per_page'), ['*'], 'page', $page)
            return response()->json(ApiHelper::success(data: $category));
        } catch (\Exception $e) {
            dd($e);
            return response()->json(ApiHelper::error());
        }
    }
}

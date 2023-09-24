<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use PhpParser\JsonDecoder;
use App\Models\game\Game;
use App\Models\Plartform\Plartform;
use App\Models\genre\Genre;
use App\Models\tag\Tag;
use App\Models\screenshot\Screenshot;
use App\Models\store\Store;

class Datacontroller extends Controller
{
    //
    public function index(Request $request)
    {
        dd('jelle');
        // $client = new \GuzzleHttp\Client(['verify' => false]);
        // $URL = $request->query('url');
        // $key = $request->query('key');
        // $size = $request->query('page_size');
        // $urll = "$URL&key=$key&page_size=$size";
        // dd($urll);
        set_time_limit(0);
        $x = 0;
        $page = 38;

        while ($x < 100) {
            $page++;
            $response = Http::withoutVerifying()->get("https://api.rawg.io/api/games?dates=2010-09-23%2C2023-09-23&key=c57b0e1d3bc043baa85da898e34888b2&page=$page&page_size=1000");

            if ($response->successful()) {
                $decodedData = json_decode($response->body());
                // $resultList = $decodedData['result'];
                $list = $decodedData->results;

                foreach ($list as $game) {
                    $gameCount = Game::where('slug', $game->slug)->count();
                    if ($gameCount == 0) {
                        $newGame = new Game();

                        $newGame->slug = $game->slug ?? '';
                        $newGame->name = $game->name ?? '';
                        $newGame->playtime = $game->playtime ?? 1;
                        $newGame->released = $game->released ?? '';
                        $newGame->background_image = $game->background_image ?? '';
                        $newGame->rating = $game->rating ?? '';

                        $newGame->save();
                    }
                    $platform = $game->platforms;
                    if ($platform != null) {
                        foreach ($platform as $daPlatform) {
                            $platformCount = Plartform::where('platform_id', $daPlatform->platform->id)->count();
                            if ($platformCount == 0) {
                                $newGame = new Plartform();

                                $newGame->platform_id = $daPlatform->platform->id;
                                $newGame->slug = $daPlatform->platform->slug;
                                $newGame->name = $daPlatform->platform->name;

                                $newGame->save();
                            }
                        }
                    }


                    $genre = $game->genres;
                    if ($genre != null) {
                        foreach ($genre as $g) {
                            $gCount = Genre::where('slug', $g->slug)->count();

                            if ($gCount == 0) {
                                $newG = new Genre();

                                $newG->name = $g->name;
                                $newG->slug = $g->slug;

                                $newG->save();
                            }
                        }
                    }


                    $tag = $game->tags;
                    if ($tag != null) {
                        foreach ($tag as $g) {
                            $gCount = Tag::where('slug', $g->slug)->count();

                            if ($gCount == 0) {
                                $newG = new Tag();

                                $newG->name = $g->name;
                                $newG->slug = $g->slug;
                                $newG->language = $g->language;
                                $newG->image_background = $g->image_background;

                                $newG->save();
                            }
                        }
                    }


                    $Screenshot = $game->short_screenshots;
                    if ($Screenshot != null) {
                        foreach ($Screenshot as $g) {
                            $gCount = Screenshot::where('image', $g->image)->count();

                            if ($gCount == 0) {
                                $newG = new Screenshot();

                                $newG->slug = $game->slug;
                                $newG->image = $g->image;

                                $newG->save();
                            }
                        }
                    }


                    $store = $game->stores;
                    if ($store != null) {
                        foreach ($store as $g) {
                            $gCount = Store::where('name', $g->store->name)->count();

                            if ($gCount == 0) {
                                $newG = new Store();

                                $newG->slug = $g->store->slug;
                                $newG->name = $g->store->name;

                                $newG->save();
                            }
                        }
                    }
                }
            }
            $x++;
        }
        // $response = Http::withoutVerifying()->get('https://api.rawg.io/api/games?dates=2010-09-23%2C2023-09-23&key=c57b0e1d3bc043baa85da898e34888b2&page=2&page_size=1000');
        // dd($response->body());

    }
}

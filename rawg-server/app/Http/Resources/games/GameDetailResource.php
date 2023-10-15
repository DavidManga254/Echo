<?php

namespace App\Http\Resources\games;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\genre\SingleGenreResource;
use App\Http\Resources\platform\SinglePlatformResource;
use App\Http\Resources\store\SingleStoreResource;
use App\Http\Resources\screenshot\ScreenshotResource;

class GameDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "playtime" => $this->playtime,
            "released" => $this->released,
            "background_image" => $this->background_image,
            "rating" => $this->rating,
            "screenshots" => ScreenshotResource::collection($this->screenshots),
            "stores" => SingleStoreResource::collection($this->stores),
            "platforms" => SinglePlatformResource::collection($this->platforms),
            "genre" => SingleGenreResource::collection($this->genre)
        ];
    }
}

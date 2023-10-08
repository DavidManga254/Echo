<?php

namespace App\Http\Resources\games;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\genre\GenreResource;

class GamesResource extends JsonResource
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
            "released" => $this->released,
            "background_image" => $this->background_image,
            "rating" => $this->rating,
            "genre" => GenreResource::collection($this->genre->take(2))
        ];
    }
}

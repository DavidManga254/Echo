<?php

namespace App\Http\Resources\genre;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use  App\Models\genre\Genre;

class SingleGenreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $genre = Genre::where('slug', $this->slug)->first();

        $firstGame = $genre->games->random();
        return [
            "name" => $this->name,
            "slug" => $this->slug,
        ];
    }
}

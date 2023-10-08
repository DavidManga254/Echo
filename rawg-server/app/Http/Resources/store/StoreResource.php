<?php

namespace App\Http\Resources\store;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\store\Store;

class StoreResource extends JsonResource
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
            "background_image" => Store::where('slug', $this->slug)
                ->first()
                ->games()
                ->inRandomOrder()
                ->first()
                ->background_image,
            "top_3_games" => Store::where('slug', $this->slug)
                ->first()
                ->games()
                ->orderBy('released', 'desc')
                ->select('name', 'released')
                ->take(3)
                ->get('name')
        ];
    }
}

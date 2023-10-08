<?php

namespace App\Http\Resources\platform;

use App\Models\Plartform\Plartform;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlatformResource extends JsonResource
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
            "background_image" => Plartform::where('slug', $this->slug)
                ->first()
                ->games()
                ->inRandomOrder()
                ->first()
                ->background_image,
            "top_3_games" => Plartform::where('slug', $this->slug)
                ->first()
                ->games()
                ->orderBy('released', 'desc')
                ->select('name', 'released')
                ->take(3)
                ->get('name')
        ];
    }
}

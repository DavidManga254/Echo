<?php

namespace App\Models\genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\game\Game;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Genre extends Model
{
    use HasFactory;

    public function games(): BelongsToMany
    {
        return $this->belongsToMany(Game::class);
    }
}

<?php

namespace App\Models\store;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\game\Game;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Store extends Model
{
    use HasFactory;

    public function games(): BelongsToMany
    {
        return $this->belongsToMany(Game::class);
    }
}

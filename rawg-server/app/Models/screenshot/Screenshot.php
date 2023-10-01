<?php

namespace App\Models\screenshot;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\game\Game;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Screenshot extends Model
{
    use HasFactory;

    public function game(): BelongsToMany
    {
        return $this->belongsToMany(Game::class);
    }
}

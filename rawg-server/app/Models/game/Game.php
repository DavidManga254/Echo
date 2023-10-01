<?php

namespace App\Models\game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\tag\Tag;
use App\Models\store\Store;
use App\Models\screenshot\Screenshot;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Game extends Model
{
    use HasFactory;

    public function tags(): HasMany
    {
        return $this->hasMany(Tag::class);
    }

    public  function stores(): BelongsToMany
    {
        return $this->belongsToMany(Store::class);
    }

    public function screenshots(): HasMany
    {
        return $this->hasMany(Screenshot::class);
    }
}

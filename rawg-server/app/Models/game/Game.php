<?php

namespace App\Models\game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\tag\Tag;
use App\Models\store\Store;
use App\Models\screenshot\Screenshot;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Plartform\Plartform;
use App\Models\genre\Genre;

class Game extends Model
{
    use HasFactory;

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public  function stores(): BelongsToMany
    {
        return $this->belongsToMany(Store::class);
    }

    public function screenshots(): BelongsToMany
    {
        return $this->belongsToMany(Screenshot::class);
    }

    public function platforms(): BelongsToMany
    {
        return $this->belongsToMany(Plartform::class);
    }

    public function genre(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class);
    }
}

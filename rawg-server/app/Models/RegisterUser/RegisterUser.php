<?php

namespace App\Models\RegisterUser;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RegisterUser extends Model
{
    use SoftDeletes;
    use HasFactory;
}

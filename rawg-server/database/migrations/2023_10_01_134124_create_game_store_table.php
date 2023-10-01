<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('game_store', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('game_id');
            $table->unsignedBigInteger('store_id');
            $table->foreign('game_id')->on('games')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_store');
    }
};

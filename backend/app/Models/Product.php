<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'brand',
        'category_id',
    ];
    use HasFactory;
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

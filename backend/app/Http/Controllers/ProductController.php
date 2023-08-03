<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
   
    public function index()
    {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    public function create()
    {
        $categories = Category::all();
        $defaultCategory = Category::first(); // Lấy danh mục đầu tiên làm danh mục mặc định
        return view('products.create', compact('categories','defaultCategory'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'brand' => 'required',
            'category_id' => 'nullable|exists:categories,id', // Validate category_id exists in categories table
        ]);
    
        Product::create($validatedData);
    
        return redirect()->route('products.index')
                         ->with('success', 'Product created successfully.');
    }

    public function show(Product $product)
    {
        return view('products.show', compact('product'));
    }

    public function edit(Product $product)
    {
        $categories = Category::all();
        return view('products.edit', compact('product', 'categories'));
    }

    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'nullable|exists:categories,id', // Validate category_id exists in categories table
        ]);
    
        $product->update($validatedData);
    
        return redirect()->route('products.index')
                         ->with('success', 'Product updated successfully.');
    }

   
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index')
                         ->with('success', 'Product deleted successfully.');
    }
}

<!DOCTYPE html>
<html>
<head>
    <title>Product Details</title>
</head>
<body>
    <h1>Product Details</h1>
    <p><strong>ID:</strong> {{ $product->id }}</p>
    <p><strong>Name:</strong> {{ $product->name }}</p>
    <p><strong>Description:</strong> {{ $product->description }}</p>
    <p><strong>Price:</strong> {{ $product->price }}</p>
    <p><strong>Brand:</strong> {{ $product->brand }}</p>
    <p><strong>Category:</strong> {{ $product->category }}</p>
    <a href="{{ route('products.index') }}">Back to Product List</a>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Create New Product</title>
</head>
<body>
    <h1>Create New Product</h1>
    <form action="{{ route('products.store') }}" method="POST">
        @csrf
        <label for="name">Name:</label>
        <input type="text" name="name" required><br>

        <label for="description">Description:</label>
        <input type="text" name="description" required><br>

        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" required><br>

        <div class="form-group">
        <label for="brand">Brand:</label>
        <input type="text" name="brand" id="brand" class="form-control" value="{{ old('brand') }}" required>
    </div>

        <label for="category">Category:</label>
        <select name="category_id" required>
            <option value="">Select Category</option>
            @foreach ($categories as $category)
                <option value="{{ $category->id }}">{{ $category->name }}</option>
            @endforeach
        </select>

        <button type="submit">Create Product</button>
    </form>
</body>
</html>

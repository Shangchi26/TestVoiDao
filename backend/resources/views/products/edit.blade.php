<!DOCTYPE html>
<html>
<head>
    <title>Edit Product</title>
</head>
<body>
    <h1>Edit Product</h1>
    <form action="{{ route('products.update', $product->id) }}" method="POST">
        @csrf
        @method('PUT')

        <label for="name">Name:</label>
        <input type="text" name="name" value="{{ $product->name }}" required><br>

        <label for="description">Description:</label>
        <input type="text" name="description" value="{{ $product->description }}" required><br>

        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" value="{{ $product->price }}" required><br>

        <label for="category">Category:</label>
        <select name="category_id" required>
            <option value="">Select Category</option>
            @foreach ($categories as $category)
                <option value="{{ $category->id }}" @if($category->id == $product->category_id) selected @endif>{{ $category->name }}</option>
            @endforeach
        </select>
        
        <div class="form-group">
            <label for="brand">Brand:</label>
            <input type="text" name="brand" id="brand" class="form-control" value="{{ old('brand', $product->brand) }}" required>
        </div>
        <button type="submit">Update Product</button>
    </form>
    <form action="{{ route('products.destroy', $product->id) }}" method="POST" id="deleteForm">
        @csrf
        @method('DELETE')
        <button type="button" onclick="confirmDelete()">Delete Product</button>
    </form>
@section('scripts')
    <script>
        function confirmDelete() {
            if (confirm('Are you sure you want to delete this product?')) {
                document.getElementById('deleteForm').submit();
            }
        }
    </script>
@endsection
</body>
</html>

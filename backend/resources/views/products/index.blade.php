<!DOCTYPE html>
<html>
<head>
    <title>Product List</title>
</head>
<body>
    <h1>Product List</h1>
    <a href="{{ route('products.create') }}">Create New Product</a>
    @if ($products->count() > 0)
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
            @foreach ($products as $product)
                <tr>
                <td>{{ $product->id }}</td>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->description }}</td>
                    <td>{{ $product->price }}</td>
                    <td>{{ $product->brand }}</td>
                    <td>
                        @isset($product->category)
                            <a href="{{ route('categories.show', $product->category->id) }}">{{ $product->category->name }}</a>
                        @else
                            N/A
                        @endisset
                    </td>
                    <td>
                        <a href="{{ route('products.show', $product->id) }}">View</a>
                        <a href="{{ route('products.edit', $product->id) }}">Edit</a>
                        <form action="{{ route('products.destroy', $product->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </table>
    @else
        <p>No products found.</p>
    @endif
</body>
</html>

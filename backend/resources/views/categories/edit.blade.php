<!DOCTYPE html>
<html>
<head>
    <title>Edit Category</title>
</head>
<body>
    <h1>Edit Category</h1>
    <form action="{{ route('categories.update', $category->id) }}" method="POST">
        @csrf
        @method('PUT')

        <label for="name">Name:</label>
        <input type="text" name="name" value="{{ $category->name }}" required><br>

        <button type="submit">Update Category</button>
    </form>
    <form action="{{ route('categories.destroy', $category->id) }}" method="POST">
        @csrf
        @method('DELETE')
        <button type="submit">Delete Category</button>
    </form>
</body>
</html>

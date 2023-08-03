<!DOCTYPE html>
<html>
<head>
    <title>Category Details</title>
</head>
<body>
    <h1>Category Details</h1>
    <p><strong>ID:</strong> {{ $category->id }}</p>
    <p><strong>Name:</strong> {{ $category->name }}</p>
    <a href="{{ route('categories.index') }}">Back to Category List</a>
</body>
</html>

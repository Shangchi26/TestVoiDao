<!DOCTYPE html>
<html>
<head>
    <title>Create New Category</title>
</head>
<body>
    <h1>Create New Category</h1>
    <form action="{{ route('categories.store') }}" method="POST">
        @csrf
        <label for="name">Name:</label>
        <input type="text" name="name" required><br>

        <button type="submit">Create Category</button>
    </form>
</body>
</html>

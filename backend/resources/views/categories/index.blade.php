<!DOCTYPE html>
<html>
<head>
    <title>Category List</title>
</head>
<body>
    <h1>Category List</h1>
    <a href="{{ route('categories.create') }}">Create New Category</a>
    @if ($categories->count() > 0)
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            @foreach ($categories as $category)
                <tr>
                    <td>{{ $category->id }}</td>
                    <td>{{ $category->name }}</td>
                    <td>
                        <a href="{{ route('categories.show', $category->id) }}">View</a>
                        <a href="{{ route('categories.edit', $category->id) }}">Edit</a>
                        <form action="{{ route('categories.destroy', $category->id) }}" method="POST" id="deleteForm_{{ $category->id }}">
                            @csrf
                            @method('DELETE')
                            <button type="button" onclick="confirmDelete()">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </table>
    @else
        <p>No categories found.</p>
    @endif
    @section('scripts')
    <script>
        function confirmDelete(categoryId) {
            if (confirm('Are you sure you want to delete this category?')) {
                document.getElementById('deleteForm_' + categoryId).submit();
            }
        }
    </script>
@endsection
</body>
</html>

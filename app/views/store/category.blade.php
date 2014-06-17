@section('content')

@section('pagination')

	<section id="pagination">
	{{ $products->links() }}
	</section>

@stop
@extends('layouts.admin')

@section('content-manage-categories')

	<div class="container">

		<div class="row">
			<h1 class="admin-page-main-title text-center">Kategorier</h1>
				<div class="col-lg-12">
					<div class="box">
          @if(Session::has('message'))
            <div class="alert alert-success"><p>{{ Session::get('message') }}</p></div>
          @endif
          @if($errors->has())
            @foreach($errors->all() as $error)
              <div class="alert alert-warning">{{$error}}</div>
            @endforeach
          @endif
          <h3>Alle kategorier</h3>
					<table class="table table-striped table-bordered orders-table">
						<thead>
							<tr>
								<td><strong>Kategori</strong></td>
								<td><strong>Slet</strong></td>
							</tr>
						</thead>
						<tbody>
						@foreach($categories as $category)
							<tr>
								<td>{{ $category->name }}</td>
                <td>
                {{ Form::open(array('url'=>'admin/categories/destroy')) }}
                {{ Form::hidden('id', $category->id) }}
                {{ Form::submit('Slet', array('class'=>'btn btn-small btn-danger')) }}
                {{ Form::close() }}
                </td>
							</tr>
						@endforeach
          </tbody>
          </table>

				<h3>Opret ny kategori</h3>

				{{ Form::open(array('url'=>'admin/categories/create')) }}
        <div class="form-group">
				{{ Form::label('name') }}
				{{ Form::text('name', null, array('class'=>'form-control')) }}
        </div>
        <div class="form-group">
				{{ Form::submit('Opret kategori', array('class'=>'btn btn-success')) }}
        </div>
				{{ Form::close() }}
				</div>
			</div>
		</div>
	</div>
@stop
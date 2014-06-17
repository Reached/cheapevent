@extends('layouts.admin')

@section('content')

<div class="container">
	<div class="row">
		<div class="col-lg-6 col-lg-offset-3">
	      @if(Session::has('message'))
	      <div class="alert alert-warning"><p>{{ Session::get('message') }}</p></div>
	      @endif
	    </div>
		<div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
			<div class="box">
			<h1 class="admin-page-main-title text-center">Log ind</h1>
				{{ Form::open(array('url'=>'users/signin', 'class'=>'form-signin')) }}

				<div class="form-group">
				{{ Form::label('email') }}
				{{ Form::text('email', null, array('class'=>'form-control')) }}
				</div>

				<div class="form-group">
				{{ Form::label('password') }}
				{{ Form::password('password', array('class'=>'form-control')) }}
				</div>

				<div class="text-center">
				{{ Form::submit('Log ind', array('class'=>'btn btn-warning btn-lg')) }}
				</div>

				{{ Form::close() }}
			</div>
		</div>
	</div>
</div>
@stop 
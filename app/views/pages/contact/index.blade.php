@extends('layouts.page')

@section('content')

<div class="container">
  @if(Session::has('message'))
  <p class="alert alert-success">{{ Session::get('message') }}</p>
  @endif

    <div class="row">
      <div class="col-lg-8">
        <div class="box">
          <h2>Kontaktinformation</h2>
          <address>
            James Hansson <br />
            27 Bricklane <br />
            Georgetown <br />
          </address>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box">
          <h3>Kontaktformular</h3>
          @foreach($errors->all(':message') as $message) <li>{{ $message }}</li> @endforeach
          {{ Form::open(array('url'=>'/contact/create')) }}
          <div class="form-group">
            {{ Form::label('name', 'Navn') }}
            {{ Form::text('name', null, array('class'=>'form-control')) }}
          </div>
          <div class="form-group">
          {{ Form::label('email', 'Email') }}
          {{ Form::text('email', null, array('class'=>'form-control')) }}
          </div>
          <div class="form-group">
          {{ Form::label('description','Din besked') }}
          {{ Form::textarea('description', null, array('class'=>'form-control')) }}
          </div>

          {{ Form::submit('Send forespørgsel', array('class'=>'btn btn-success')) }}

          {{ Form::close() }}
        </div>
    </div>
  </div>
</div>

@stop

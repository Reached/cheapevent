@extends('layouts.admin')

@section('content')

	<div class="container">
    <div class="row">
      <div class="col-lg-7">
      @if(Session::has('message'))
        <p class="alert alert-success">{{ Session::get('message') }}</p>
      @endif
        <h2 class="admin-page-main-title text-center">Administrer bookningerzzz</h2>
        <div class="box">
        {{ Form::open(array('url'=>'/admin/bookings/create')) }}
          <div class="form-group">
          {{ Form::label('date', 'Vælg en dato for bookningen') }}
          {{ Form::text('date', null, array('class'=>'date-form', 'id'=>'admin')) }}
          {{ Form::hidden('realdate', null, array('id'=>'realdate')) }}
          </div>
          <div class="form-group">
          {{ Form::label('additional', 'Giv din booking en titel') }}
          {{ Form::text('additional', null, array('class'=>'form-control', 'id'=>'additional')) }}
          </div>
          {{ Form::submit('Opret booking', array('class'=>'btn btn-lg btn-success')) }}
        {{ Form::close() }}
        </div>
      </div>
      <div class="col-lg-5">
        <h2 class="admin-page-main-title text-center">Tidl. bookninger</h2>
        <div class="box">
        <ul>
          <table class="table table-striped table-bordered orders-table">
            <thead>
                <tr>
                  <td><strong>Titel</strong></td>
                  <td><strong>Afholdelsesdato</strong></td>
                  <td><strong>Slet booking</strong></td>
                </tr>
              </thead>
              <tbody>
                @foreach ($bookings as $booking) 
                <tr>
                  <td>{{ $booking->additional }}</td>
                  <td>{{ $booking->realdate }}</td>
                  <td>
                  {{ Form::open(array('url'=>'admin/bookings/destroy')) }}
                  {{ Form::hidden('id', $booking->id) }}
                  {{ Form::submit('Slet', array('class'=>'btn btn-small btn-danger')) }}
                  {{ Form::close() }}
                  </td>
                </tr>
                @endforeach
            </tbody>
          </table>

                  
        </ul>
        </div>
      </div>
      </div>
    </div>
  </div>

@stop


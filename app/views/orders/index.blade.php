@extends('layouts.admin')

@section('content')

<div class="container">
	<div class="row">
  <h1 class="admin-page-main-title text-center">Ordrer</h1>
  	<div class="col-lg-12">
      <div class="box">
      	<table class="table table-striped table-bordered orders-table">
      		<thead>
      			<tr>
      				<td><strong>Aktivitetens navn</strong></td>
      				<td><strong>Bestillers email</strong></td>
      				<td><strong>Oprettet</strong></td>
      			</tr>
      		</thead>
      		<tbody>
      		@foreach($orders as $order)
      			<tr>
      				<td>{{ $order->activity_title }}</td>
      				<td>{{ $order->email }}</td>
      				<td>{{ $order->created_at }}</td>
      			</tr>
      		@endforeach
      		</tbody>
      	</table>
      </div>
    </div>
  </div>
</div>

@stop

@extends('layouts.admin')

@section('content-manage-products')

    <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
    <h1 class="admin-page-main-title text-center">Aktiviteter</h1>
      <div class="row">
      	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      		<div class="box">
      		<h2 class="admin-page-title">Opret ny aktivitet</h2>
      		<hr>
      			{{ Form::open(array('url'=>'admin/products/create', 'id'=>'ajaxcreate', 'files'=>true)) }}

						<div class="form-group">
							{{ Form::label('title', 'Titel') }}
							{{ Form::text('title', null, array('class'=>'form-control', 'placeholder'=>'Bubble Fodbold')) }}
						</div>

						<div class="form-group">
							{{ Form::label('description', 'Beskrivelse') }}
							{{ Form::textarea('description', null, array('class'=>'form-control', 'placeholder'=>'Bubble fodbold er en sjov beskæftigelse for op til 20 personer.')) }}
						</div>

						<div class="form-group">
							{{ Form::label('price', 'Pris') }}
							{{ Form::text('price', null, array('class'=>'form-control', 'placeholder'=>'5550')) }}
						</div>
			            <div class="form-group">
			              {{ Form::label('participants', 'Max antal deltagere') }}
			              {{ Form::text('participants', null, array('class'=>'form-control', 'placeholder'=>'10')) }}
			            </div>
			             <div class="form-group">
			              {{ Form::label('indooroutdoor', 'Indendørs/udendørs') }}
			              {{ Form::select('indooroutdoor', array('Indendørs' => 'Indendørs', 'Udendørs' => 'Udendørs'), null, array('class'=>'form-control')) }}
			            </div>
			            <div class="form-group">
			              {{ Form::label('notes', 'Andre bemærkninger') }}
			              {{ Form::textarea('notes', null, array('class'=>'form-control', 'placeholder'=>'Husk sikkerhedshjelm, for det går stærkt.')) }}
			            </div>
						<div class="form-group">
							<div class="fileinput fileinput-new" data-provides="fileinput">
							  <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px;"></div>
							  <div>
							    <span class="btn btn-default btn-file">Upload billede<span class="fileinput-new"></span><span class="fileinput-exists"></span><input type="file" name="image"></span>
							    <a href="#" class="btn btn-danger fileinput-exists" data-dismiss="fileinput">Fjern billede</a>
							  </div>
							</div>
						</div>

						<div class="form-group">
							{{ Form::label('category_id', 'Kategori') }}
							{{ Form::select('category_id', $categories, null, array('class'=>'form-control')) }}
						</div>

						{{ Form::submit('Opret aktivitet', array('class'=>'btn btn-warning')) }}
						{{ Form::close() }}
				      	</div>
				      	</div>
				      	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				      		<div class="box">
				      		<h2 class="admin-page-title">Eksisterende aktiviteter</h2>
				      		<hr>
				      		<ul class="admin-page-product-list">
						@foreach($products as $product)
							<li class="admin-activity" id="admin-activity">
									<p class="admin-activity-title">{{ $product->title }}
									<br>
									<small>{{ $product->created_at->diffForHumans() }}</small>
									</p>

									<div class="admin-page-activity-btn">
									{{ Form::open(array('url'=>'/admin/products/destroy', 'id'=>'ajaxdelete')) }}
									{{ Form::hidden('id', $product->id) }}
									{{ Form::submit('Slet', array('class'=>'btn btn-danger', 'id' => 'delete',)) }}
									{{ Form::close() }}
									</div>

									{{ Form::open(array('url'=>'admin/products/toggle-availability', 'class'=>'')) }}
									{{ Form::hidden('id', $product->id) }}

									<div class="admin-page-activity-btn">
									{{ Form::submit('Opdater', array('class'=>'btn btn-info')) }}
									</div>

									<div class="admin-page-activity-btn">
									{{ Form::select('availability', array('1'=>'Synlig', '0'=>'Ikke synlig'), $product->availability, array('class'=>'btn btn-info dropdown-toggle')) }}
									</div>

									{{ Form::close() }}
							</li>
						@endforeach
					</ul>
      		</div>
      	</div>
      </div>
    </div>
	@if($errors->has())
		<div id="form-errors">
			<p>De følgende fejl opstod:</p>

			<ul>
				@foreach($errors->all() as $error)
				<li>{{$error}}</li>
				@endforeach
			</ul>
		</div>
	@endif
@stop

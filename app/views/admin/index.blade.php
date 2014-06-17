@extends('layouts.admin')

@section('admin-front-page')
	<div class="container">
		<div class="col-lg-8 col-lg-offset-2">
		<h1 class="admin-page-main-title text-center">Administration</h1>
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				<a href="/admin/products" class="admin-page-link">
					<div class="box text-center">
						<i class="admin-page-icon fa fa-cubes"></i>
						<h2 class="admin-page-title">
							Aktiviteter
						</h2>
					</div>
				</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				<a href="/admin/orders" class="admin-page-link">
					<div class="box text-center">
						<i class="admin-page-icon fa fa-file-text-o"></i>
						<h2 class="admin-page-title">
							Ordrer
						</h2>
					</div>
				</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				<a href="/admin/categories" class="admin-page-link">
					<div class="box text-center">
						<i class="admin-page-icon fa fa-paper-plane"></i>
						<h2 class="admin-page-title">
							Kategorier
						</h2>
					</div>
				</a>
				</div>
			</div>
		</div>
	</div>

@stop


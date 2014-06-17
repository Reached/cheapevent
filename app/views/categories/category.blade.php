@extends('layouts.page')

@section('content')

<div class="container">

  <h3 class="sub-header">{{ $category->name }}</h3>
  <ul class="nav nav-pills">
    <li><a href="/kategorier">Alle aktiviteter</a></li>
    @foreach ($catnav as $cat)
    <li>{{ HTML::link('/store/category/'.$cat->id, $cat->name) }}</li>
    @endforeach
  </ul>

  <div class="row">
    @foreach($products as $product)
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
      <div class="box">
        @if ( $product->availability == 1 )
        <article class="item-category-page">
          {{ HTML::image($product->image, $product->title, array('class'=>'activity-img')) }}
          <h2 class="activity-title">{{ HTML::link('/store/view/'.$product->id, $product->title) }}</h2>
          <p class="activity-description">{{Str::limit($product->description, 150) }}</p>
          <hr>
          <p class="activity-price">{{ $product->price }},-</p>
        </article>
        @endif
      </div>
    </div>
    @endforeach
  </div>

  <section id="pagination">
    {{ $products->links() }}
  </section>

</div>

@stop
@extends('layouts.page')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
      {{ Form::open(array('url'=>'/orders/create', 'id'=>'tryitForm', 'tabindex'=>'1')) }}
      {{ Form::hidden('id') }}
      <div class="box">
        <div class="col-lg-4 col-xs-12">
          {{ HTML::image($product->image, $product->title, array('class'=>'activity-img')) }}
        </div>
        <div class="col-lg-8 col-xs-12">
          <h2 class="activity-title">{{ $product->title }}</h2>
          <p class="activity-description">{{ $product->description }}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-8 col-sm-8 col-xs-12">
      <div class="box">
        <h3 class="activity-title">Vigtige oplysninger</h3>
        <ul>
          <li>Pris: <strong>{{ $product->price }},-</strong></li>
          <li>Antal deltagere (max): <strong>{{ $product->participants }}</strong></li>
          <li>Aktivitetstype: <strong>{{ $product->indooroutdoor }}</strong></li>
          <li>Andet: <em>{{ $product->notes }}</em></li>
        </ul>
            <div class="radios">
              <input type="radio" name="activity_title" value="{{ $product->title }}" id="{{ $product->id }}">
              <label class="radio" for="{{ $product->id }}" id="labelText">Bestil nu</label>
            </div>
      </div>
    </div>
  </div>
     <section class="submit-info-section clearfix" id="fadeInGroup">
     <div class="container">
      <div class="row">
      <div class="box submit-section-box">
      <h2 class="text-center small-title">Fortsæt bestilling</h2>
      <div class="form-group col-lg-6 form-group-front-page" id="dateGroup">
        <label>Vælg en dato for afholdelse af <span id="choice"></span></label>
        <input type="text" name="date" class="date-form" id="datePicker">
      </div>
   <!--    <div class="form-group col-lg-6 form-group-front-page">
        <label>Vælg et tidspunkt for afholdelse af <span id="choice"></span></label>
        <input type="text" name="date" class="date-form" id="timePicker">
      </div> -->
       <div class="form-group col-lg-6 form-group-front-page" id="fnameGroup">
        <label class="control-label">Fornavn</label>
        <input type="text" class="form-control" name="firstName" placeholder="Fornavn">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="lnameGroup">
        <label class="control-label">Efternavn</label>
        <input type="text" class="form-control" name="lastName" placeholder="Efternavn">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="emailGroup">
        <label class="control-label">Email</label>
        <input type="email" class="form-control" name="email" placeholder="Email">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="streetGroup">
        <label class="control-label">Adresse</label>
        <input type="text" class="form-control" name="streetName" placeholder="Gadenavn og nummer">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="zipGroup">
        <label class="control-label">Postnummer</label>
        <input type="number" min="1000" max="9999" class="form-control" name="zip" placeholder="Postnr">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="cityGroup">
        <label class="control-label">By</label>
        <input type="text" class="form-control" name="city" placeholder="By">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="participantsGroup">
        <label class="control-label">Antal deltagere</label>
        <input type="number" min="1" name="participants" class="form-control" placeholder="Antal deltagere">
      </div>
      <div class="form-group col-lg-6 form-group-front-page" id="phoneGroup">
        <label class="control-label">Telefon</label>
        <input type="phone" min="1" name="phone" class="form-control" placeholder="Dit telefonnummer" id="phone">
      </div>
      <div class="form-group col-lg-6 form-group-front-page">
        <label class="control-label">Eventuelle bemærkninger</label>
        <textarea class="form-control" name="additional" placeholder="Eventuelle bemærkninger"></textarea>
      </div>
      <div class="text-center" id="loadingImage">
        <div class="loader"></div>
        <h3>Sender din bestilling..</h3>
      </div>
      <div class="form-group col-lg-12">
        <button type="submit" class="btn btn-lg btn-warning margin-top pull-right">Afslut bestilling</button>
      </div>
    </div>
    </div>
  </div>
  {{ Form::close() }}
</section>
</div>
@stop

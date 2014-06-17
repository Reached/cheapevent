<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Cheapevent</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Loading Bootstrap -->
  {{ HTML::style('css/bootstrap.css') }}
  {{ HTML::style('css/bootstrap-datetimepicker.min.css') }}

  <!-- Loading custom css -->
  {{ HTML::style('css/custom.css') }}
  <!-- Loading custom font -->
  <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,700' rel='stylesheet' type='text/css'>

  <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
      <![endif]-->
      {{ HTML::script('js/modernizr.custom.js') }}
    </head>
    <body>

    @if (Auth::check())
        <div class="top-menu-logged-in">
          <div class="container">
            <p class="pull-left">Hej <strong>{{ Auth::user()->firstname }}</strong></p>
            <nav class="nav-menu-top-logged-in">
              <ul class="list-inline">
                <li><a href="/admin">Administration <i class="fa fa-cog"></i> </a></li>
                <li><a href="/admin/products/index">Opret ny aktivitet <i class="fa fa-plus"></i> </a></li>
                <li><a href="/admin/orders">Ordrer <i class="fa fa-book"></i> </a></li>
                <li><a href="users/signout">Log ud <i class="fa fa-unlock"></i> </a></li>
              </ul>
            </nav>
          </div>
        </div>
    @endif

      <section class="intro-section" id="home">
        <div class="header-bg">
          <div class="container">
            <a href="/" class="logo"><span style="font-weight: bold;">Cheap</span><span style="font-weight: 100;">Event</span></a>
            <a id="trigger-overlay" class="menu-btn">Menu <i class="fa fa-bars"></i></a>
            <div class="overlay overlay-hugeinc">
              <div class="container">
                <button type="button" class="overlay-close">Close</button>
              </div>
              <nav>
                <ul>
                  <li><a href="#book" data-scroll>Book nu</a></li>
                  <li><a href="/kategorier">Vores events</a></li>
                  <li><a href="/handelsbetingelser">Handelsbetingelser</a></li>
                  <li><a href="/om">Om os</a></li>
                  <li><a href="/kontakt">Kontakt</a></li>
                </ul>
              </nav>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <h1 class="intro-text-title text-center">Book events online</h1>
                <h2 class="intro-text-sub-title text-center">Gruppeaktiviteter på den nemme måde.</h2>
                <div class="text-center col-lg-12 fp-btn">
                  <a href="#book" class="btn-fp" data-scroll>Book nu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section clearfix">
       <div class="container">
         <div class="row">
           <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="circle-step">1</div>
                <p class="step-text text-center"><strong>Vælg</strong> en aktivitet der passer til dine ønsker.</p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="circle-step">2</div>
                <p class="step-text text-center"><strong>Indtast</strong> dine personlige oplysninger og send din bestilling.</p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="circle-step">3</div>
                <p class="step-text text-center"><strong>Vi</strong> tager hånd om din booking, og vender tilbage inden 24 timer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    @if(Session::has('message'))
    <p class="alert warning">{{ Session::get('message') }}</p>
    @endif

    {{ Form::open(array('url'=>'/orders/create', 'id'=>'tryitForm', 'tabindex'=>'1')) }}
    {{ Form::hidden('id') }}
    <section class="select-event-section clearfix" id="book">
     <div class="container">
      <div class="row">
        <h2 class="text-center small-title">Nyeste aktiviteter</h2>
        <p class="lead text-center">Nedenfor kan du se vores nyeste akviteter. Du booker en akvitivet ved at vælge "Vælg aktivitet".</p>
        <div class="container">
            <div class="owl-carousel" id="owl-carousel">
              @foreach($products as $product)
              @if ( $product->availability == 1 )
              <article class="box" id="activityGroup">
                {{ HTML::image($product->image, $product->title, array('class'=>'activity-img')) }}
                <h2 class="activity-title">{{ HTML::link('/store/view/'.$product->id, $product->title) }}</h2>
                <p class="activity-description">{{Str::limit($product->description, 150) }}</p>
                <hr>
                <p class="activity-price">{{ $product->price }},-</p>
                <div class="radios">
                  <input type="radio" name="activity_title" value="{{ $product->title }}" id="{{ $product->id }}">
                  <label class="radio" for="{{ $product->id }}" id="{{ $product->id }}">Vælg aktivitet</label>
                </div>
              </article>
              @endif
              @endforeach
            </div>
            <div class="text-center" style="margin-top: 25px;" id="fadeOutBox">
              <a href="/kategorier" class="btn btn-lg btn-default">Klik her for at se alle vores aktiviteter</a>
            </div>
        </div>
      </div>
    </div>
  </section>

  <section class="submit-info-section clearfix" id="fadeInGroup">
    <div class="container">
      <div class="row">
        <h2 class="text-center small-title">Bestilling</h2>
        <p class="lead text-center">Udfyld dine oplysninger nedenfor, så vi kan hjælpe dig med netop din aktivitet.</p>
        <div class="form-group col-lg-12 form-group-front-page" id="dateGroup">
          <label>Vælg et tidspunkt for afholdelse af <span id="choice"></span></label>
          <div class='input-group date' data-date-format="YYYY/MM/DD HH:MM" id='timePicker'>
            <input type='text' name="date" class="form-control" />
            <span class="input-group-addon"><span class="fa fa-calendar"></span>
          </span>
        </div>
      </div>
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
      <div class="form-group col-lg-6 form-group-front-page">
        <label class="control-label">Eventuelle bemærkninger</label>
        <textarea class="form-control" name="additional" placeholder="Eventuelle bemærkninger"></textarea>
      </div>
      <div class="text-center" id="loadingImage">
        <div class="loader"></div>
        <h3>Sender din bestilling..</h3>
      </div>
      <div class="form-group col-lg-12">
        <button type="submit" class="btn btn-lg btn-warning margin-top">Bestil </button>
      </div>
    </div>
  </div>
  {{ Form::close() }}
</section>

<!-- <section class="references-section clearfix">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h3 class="references-title text-center"><i class="fa fa-comments"></i> Tidligere kunder</h3>
      </div>
      <div class="col-lg-12 text-center">
        <img src="images/jp_press.png">
        <img src="images/altomdata_press.png">
        <img src="images/mx_press.png">
      </div>
    </div>
  </section> -->
  <footer class="footer">
    <div class="container clearfix">
      <a href="/" class="logo footer-logo"><span style="font-weight: bold;">Cheap</span><span style="font-weight: 100;">Event</span></a>
      <dl class="footer-nav">
        <dt class="nav-title">VIGTIG INFO</dt>
        <dd class="nav-item"><a href="/handelsbetingelser">Handelsbetingelser</a></dd>
      </dl>
      <dl class="footer-nav">
        <dt class="nav-title">AKTIVITETER</dt>
        <dd class="nav-item"><a href="/kategorier">Se alle kategorier</a></dd>
      </dl>
      <dl class="footer-nav">
        <dt class="nav-title">OM OS</dt>
        <dd class="nav-item"><a href="/om">Læs historien bag</a></dd>
      </dl>
      <dl class="footer-nav">
        <dt class="nav-title">KONTAKT</dt>
        <dd class="nav-item"><a href="/kontakt">Har du spørgsmål?</a></dd>
        <dd class="nav-item" style="font-size: 25px;"><a href="#"><i class="fa fa-facebook-square"></i></a></dd>
      </dl>
    </div>
    <p class="footer-copyright text-center">Copyright &copy; Cheapevent 2014. | CVR: </p>
  </footer>

  <!-- Load JS here for greater good =============================-->
  {{ HTML::script('js/untitled.js') }}
</body>
</html>

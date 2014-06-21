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
                <li><a href="{{ URL::route('getSignout') }}">Log ud <i class="fa fa-unlock"></i> </a></li>
              </ul>
            </nav>
          </div>
        </div>
    @endif

      <section class="intro-section" id="home">
        <div class="header-bg">
          <div class="container">
            <a href="/" class="logo"><span style="font-weight: bold;">Cheap</span><span style="font-weight: 100;">Event</span></a>
            <a id="trigger-overlay" class="menu-btn"><i class="fa fa-bars"></i></a>
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
                <div class="circle-step text-center">{{ HTML::image('images/check.png', 'Vælg en aktivitet') }}</div>
                <p class="step-text"><strong>1. Vælg</strong> en aktivitet der passer til dine ønsker.</p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="circle-step text-center">{{ HTML::image('images/calendar.png', 'Indtast dine oplysninger') }}</div>
                <p class="step-text"><strong>2. Indtast</strong> dine personlige oplysninger og send din bestilling.</p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="circle-step text-center">{{ HTML::image('images/support.png', 'Vi sørger for resten') }}</div>
                <p class="step-text"><strong>3. Vi</strong> tager hånd om din booking, og vender tilbage inden 24 timer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {{ Form::open(array('url'=>'/orders/create', 'id'=>'tryitForm', 'tabindex'=>'1')) }}
    {{ Form::hidden('id') }}
    <section class="select-event-section" id="book">
    @foreach($products as $product)
    <div class="headline-section">
      <div class="container">
        <h3 class="activity-title-headline">{{ HTML::image($product->image, $product->title, array('class'=>'activity-image-fp')) }} {{ $product->title }}</h3>
      </div>
    </div>
      <div class="container">
        <div class="row content-section-fp">
            <article class="col-lg-5 col-md-5 col-sm-5 content-description">
                      
              <p class="lead">{{Str::limit($product->description, 150) }}</p>
              {{ HTML::link('/store/view/'.$product->id, 'Læs mere') }}

            </article>
            <article class="col-lg-offset-2 col-lg-4 col-md-4 col-md-offset-2">
              <div class="box select-event-box">
              <h4 class="text-center order-now-title"><strong>Info</strong></h4>
                <p class="activity-price activity-price-fp text-center">{{ $product->price }},- Dkk / {{ $product->participants }} personer</p>
                  <div class="radios">
                  <input type="radio" name="activity_title" value="{{ $product->title }}" id="{{ $product->id }}">
                  <label class="radio" for="{{ $product->id }}" id="labelText">Bestil nu</label>
                </div>
              </div>
            </article>
          @endforeach
      </div>
    </div>
    </section>

  <section class="submit-info-section clearfix" id="fadeInGroup">
    <div class="container">
      <div class="row">
      <div class="box submit-section-box">
        <h2 class="text-center small-title">Fortsæt bestilling</h2>
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
  <div id="form-after-submit">
  <h1><i class='fa fa-check-circle' style='color: #37BC9B; font-size: 70px;'></i><br>Tak for din bestilling.</h1><p class='lead'>Vi vender tilbage indenfor 24 timer, hvis du har yderligere spørgsmål er du velkommen til at <a href='#'>kontakte</a> os.</p>
  </div>

  <!-- Load JS here for greater good =============================-->
  {{ HTML::script('js/production.js') }}
</body>
</html>

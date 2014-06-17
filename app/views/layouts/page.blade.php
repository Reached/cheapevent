<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Cheapevent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Loading Bootstrap -->
    {{ HTML::style('css/bootstrap.css') }}

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

<body class="select-event-section">

    <header class="page-header clearfix">
        <div class="container">
            <a href="/" class="logo logo-page"><span style="font-weight: bold;">Cheap</span><span style="font-weight: 100;">Event</span></a>
            <a id="trigger-overlay" class="menu-btn menu-btn-page">Menu <i class="fa fa-bars"></i></a>
            <div class="overlay overlay-hugeinc">
                <div class="container">
                  <button type="button" class="overlay-close">Close</button>
              </div>
              <nav>
                  <ul>
                    <li><a href="/" data-scroll>Tilbage til forsiden</a></li>
                    <li><a href="/kategorier">Vores events</a></li>
                    <li><a href="/handelsbetingelser">Handelsbetingelser</a></li>
                    <li><a href="/om">Om os</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

@yield('content')

<footer class="footer-subpage">
Copyright &copy; Cheapevent 2014. | CVR: 
</footer>

<!-- Load JS here for greater good =============================-->
{{ HTML::script('js/untitled.js') }}

</body>




</html>

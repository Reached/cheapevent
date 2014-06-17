<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Administrator</title>
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

    <body class="admin-background">

      @if (Auth::check())
          <div class="top-menu-logged-in">
            <div class="container">
              <p class="pull-left">Hej <strong>{{ Auth::user()->firstname }}</strong> // Gå til <strong><a href="/">Forsiden</a></strong></p>
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

      @yield('admin-front-page')

      @yield('content')

      @yield('content-manage-products')

      @yield('content-manage-categories')

    {{ HTML::script('js/untitled.js') }}

    </body>

    </html>

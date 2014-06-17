<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
</head>
<body>
  <style>
    body {
      color: #333;
      background: #eee;
    }
    .container {
      margin: 0 auto;
    }
    h1 {
      font-size: 18px;
      margin: 15px 0;
    }
    h2 {
      margin: 15px 0;
      font-size: 15px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
    }
  </style>
  <div class="container">
    <h1>Ny Besked (Cheapevent)</h1>
    <p>Hej Mathias, du har modtaget en ny besked fra en besøgende på Cheapevent.</p>

    <h2>Fra {{ $contact->name }}</h2>
    <p><small>{{ $contact->email }}</small></p>
    <p>{{ $contact->description }}</p>
  </div>
</body>
</html>

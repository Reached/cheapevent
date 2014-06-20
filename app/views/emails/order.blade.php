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
		<h1>Ny ordre (Cheapevent)</h1>
		<p>Hej Mathias, du har modtaget en ny ordre på Cheapevent.</p>
		<h2>Info om aktivitet</h2>
		<ul>
			<li>
				<strong>Aktivitet:</strong> {{ $order->activity_title }}
			</li>
			<li>
				<strong>Tidspunkt for afholdelse af event:</strong> {{ $order->date }}
			</li>
		</ul>
		<h2>Info om bestiller</h2>
		<ul>
			<li>
				<strong>Navn:</strong> {{ $order->firstName }} {{ $order->lastName }}
			</li>
			<li>
				<strong>Email:</strong> {{ $order->email }}
			</li>
			<li>
				<strong>Telefon:</strong> {{ $order->phone }}
			</li>
			<li>
				<strong>Vejnavn og nr:</strong> {{ $order->streetName }}
			</li>
			<li>
				<strong>Postnummer:</strong> {{ $order->zip }}
			</li>
			<li>
				<strong>By:</strong> {{ $order->city }}
			</li>
			<li>
				<strong>Antal deltagere:</strong> {{ $order->participants }}
			</li>
			<li>
				<strong>Eventuelle bemærkninger:</strong> <br><i>{{ $order->additional }}</i>
			</li>
		</ul>
	</div>
</body>
</html>

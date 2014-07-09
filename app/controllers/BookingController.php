<?php

	class BookingController extends Basecontroller {

		public function __contruct() {
			parent::__construct();
			$this->beforeFilter('csrf', array('on'=>'post'));
		}

		public function getIndex() {

		$products = Product::all();
		$bookings = Booking::all();

		$dates = Booking::lists('date');

		JavaScript::put([
		    'disabledDates' => $dates
		]);

			return View::make('bookings.index')->with('products', $products)->with('bookings', $bookings);
		}

		public function postCreate() {
		$validator = Validator::make(Input::all(), Booking::$rules);

		var_dump();

		if ($validator->passes()) {
			$booking = new Booking;
			$booking->date = Input::get('date');
			$booking->additional = Input::get('additional');
			$booking->realdate = Input::get('realdate');
			$booking->save();

			return Redirect::to('admin/bookings/index')
				->with('message', 'Booking blev oprettet i systemet');
		}

		return Redirect::to('admin/bookings/index')
			->with('message', 'Noget gik galt')
			->withErrors($validator)
			->withInput();
		}

		public function postDestroy() {
			$booking = Booking::find(Input::get('id'));

			if($booking) {
			   $booking->delete();
			   return Redirect::to('admin/bookings/index')
			   		->with('message', 'Booking blev slettet');
			}

			return Redirect::to('admin/bookings/index')
				->with('message', 'Booking blev ikke slettet');
		}
}
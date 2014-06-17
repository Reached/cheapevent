<?php

class OrdersController extends Basecontroller {

	public function __contruct() {
		parent::__construct();
		$this->beforeFilter('csrf', array('on'=>'post'));
	}

	public function postCreate() {
		$validator = Validator::make(Input::all(), Order::$rules);

		// If the validator passes, prepare the values for saving to db.

		if ($validator->passes()) {

			$order = new Order;
			$order->id = Input::get('id');
			$order->activity_title = Input::get('activity_title');
			$order->date = Input::get('date');
			$order->firstName = Input::get('firstName');
			$order->lastName = Input::get('lastName');
			$order->email = Input::get('email');
			$order->streetName = Input::get('streetName');
			$order->zip = Input::get('zip');
			$order->city = Input::get('city');
			$order->additional = Input::get('additional');
			$order->participants = Input::get('participants');

			$data = ['order'=> $order];

			// Email to administrator

			Mail::send('emails.order', $data, function($message) use ($order)
		    {
		        $message->to('casper.aarby.sorensen@gmail.com')
		        	->subject("Ny ordre");
		    });

		    // Email confirmation for the customer

		    Mail::send('emails.order_confirmation', $data, function($message) use ($order)
		    {
		        $message->to($order->email)
		        	->subject("Bestillingsbekræftelse");
		    });

		    // Save the order to the database

			$order->save();

			// Return a successful json response to our view

			return Response::json(['success'=>'true']);

		}

		// If validation fails, return the errors to the view

		if($validator->fails()) {
			return Response::json(['success'=>false,
			 'error'=>$validator->errors()->toArray()
			 ]);
		};
	}

}

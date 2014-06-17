<?php

	class AdminController extends Basecontroller {

		public function __contruct() {
		parent::__construct();
		$this->beforeFilter('csrf', array('on'=>'post'));
		$this->beforeFilter('admin');
	} 

		public function getIndex() {

			return View::make('admin.index');
		}

		public function getOrders() {

		return View::make('orders.index')
			->with('orders', Order::all());
		}

}
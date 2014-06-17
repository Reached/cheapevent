<?php

class UsersController extends BaseController {
	public function __construct() {
		parent::__construct();
		$this->beforeFilter('csrf', array('on'=>'post'));
	}

	public function getSignin() {
		return View::make('users.signin');
	} 

	public function postSignin() {
		if (Auth::attempt(array('email'=>Input::get('email'), 'password'=>Input::get('password')))) {
			return Redirect::to('/admin')->with('message', 'Du blev logget ind.');
		}
		return Redirect::to('users/signin')->with('message', 'Dit brugernavn eller password var forkert');
 	}

 	public function getSignout() {
 		Auth::logout();
 		Session::flush();
 		return Redirect::to('users/signin')->with('message', 'Du blev logget ud');
 	}
}
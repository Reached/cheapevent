<?php

class Order extends Eloquent {

	protected $fillable = array('id', 'activity_title', 'date', 'time', 'firstName','lastName', 'email', 'streetName', 'zip', 'city');

	public static $rules = array(
		'activity_title'=>'required|min:2',
		'date'=>'required|',
		'firstName'=>'required|min:2',
		'lastName'=>'required|min:2',
		'email'=>'required|email|min:2',
		'streetName'=>'required|min:2',
		'zip'=>'required|numeric|min:1000|max:9999',
		'city'=>'required|min:2|',
		'participants'=>'required|min:1|numeric',
		'phone'=>'required|'
		);

}

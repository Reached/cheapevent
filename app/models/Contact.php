<?php

class Contact extends Eloquent {

  public static $rules = array(
    'name'=>'required|min:2',
    'email'=>'required|email|min:2',
    'description'=>'required|min:2'
    );

}

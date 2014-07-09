<?php

class Booking extends Eloquent {

	protected $fillable = array('id','date', 'realdate', 'additional');

	public static $rules = array(
		'date'=>'required|',
        'additional'=>'required'
		);

	public function getDateAttribute($value)
    {
        return explode('-', date('Y-m-d', strtotime($value)));
    }

    public function getDatearrayAttribute()
    {
        $datearray = explode('-', date('Y-m-d', strtotime($this->date)));
        $datearray[1] -= 1;
        return $datearray; 
    }

}
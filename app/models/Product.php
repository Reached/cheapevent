<?php

class Product extends Eloquent implements \Marcanuy\Popularity\PopularityInterface {

	protected $fillable = array('category_id', 'title', 'description', 'price', 'availability', 'image', 'participants', 'notes', 'indooroutdoor');

	public static $rules = array(
		'category_id'=>'required|integer',
		'title'=>'required|min:2',
		'description'=>'required|min:10',
		'price'=>'required|numeric',
		'availability'=>'integer',
		'participants'=>'required|numeric',
		'notes'=>'required',
		'image'=>'required|image|mimes:jpeg,jpg,png,bmp,gif,svg',
		'indooroutdoor'=>'required'
		);

	public function category() {
		return $this->belongsTo('Category');
	}

	public function popularityStats()
    {
        return $this->morphOne('Stats', 'trackable');
    }

    public function hit()
    {
        //check if a polymorphic relation can be set
        if($this->exists){
            $stats = $this->popularityStats()->first();
            if( empty( $stats ) ){
                //associates a new Stats instance for this instance
                $stats = new Stats();
                $this->popularityStats()->save($stats);
            }
            return $stats->updateStats();
        }
            return false;            
        }
}

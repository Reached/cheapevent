<?php 

class StoreController extends BaseController {

	public function __construct() {
		parent::__construct();
		$this->beforeFilter('csrf', array('on'=>'post'));
	}

	public function getIndex() {

		$products = Product::take(1)->orderBy('id', 'DESC')->get();

		$dates = Booking::lists('date');

		JavaScript::put([
		    'disabledDates' => $dates
		]);

		return View::make('store.index')->with('products', $products);
	}

	public function getView($id) {

		$product = Product::find($id);
		$product->hit();

		$dates = Booking::lists('date');

		JavaScript::put([
		    'disabledDates' => $dates
		]);

		return View::make('store.view')->with('product', Product::find($id));
	}

	public function getCategory($cat_id) {
		return View::make('categories.category')
			->with('products', Product::where('category_id', '=', $cat_id)->paginate(4))
			->with('category', Category::find($cat_id));
	}
}
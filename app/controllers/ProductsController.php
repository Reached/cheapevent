<?php

class ProductsController extends Basecontroller {

	public function __contruct() {
		parent::__construct();
		$this->beforeFilter('csrf', array('on'=>'post'));
	}

	public function getIndex() {
		$categories = array();

		foreach(Category::all() as $category) {
			$categories[$category->id] = $category->name;
		}

		return View::make('products.index')
			->with('products', Product::all())
			->with('categories', $categories);
	}

	public function postCreate() {
		$validator = Validator::make(Input::all(), Product::$rules);

	if ($validator->passes()) {
			$product = new Product;
			$product->category_id = Input::get('category_id');
			$product->title = Input::get('title');
			$product->description = Input::get('description');
			$product->price = Input::get('price');
			$product->participants = Input::get('participants');
			$product->notes = Input::get('notes');
			$product->indooroutdoor = Input::get('indooroutdoor');

			$image = Input::file('image');
			$filename = date('Y-m-d-H:i:s')."-".$image->getClientOriginalName();
			$path = public_path('images/products/'.$filename);
			Image::make($image->getRealPath())->resize(200, 200)->save($path);
			$product->image = 'images/products/'.$filename;

			$product->save();

			return Redirect::to('admin/products')
				->with('message', 'Aktiviteten blev oprettet.');

		}

			return Response::json(['success'=>false, 'error'=>$validator->errors()->toArray()]);

	}

	public function postDestroy() {
		$product = Product::find(Input::get('id'));

		if($product) {
		   File::delete(public_path($product->image));
		   $product->delete();
		   return Redirect::to('admin/products/index')
		   		->with('message', 'Aktivitet blev slettet');
		}

		return Redirect::to('admin/products/index')
			->with('message', 'Aktivitet blev ikke slettet');
	}

	public function postToggleAvailability() {
		$product = Product::find(Input::get('id'));

		if ($product) {
			$product->availability = Input::get('availability');
			$product->save();

			return Redirect::to('admin/products/index')->with('message', 'Aktivitet blev opdateret');
		}

		return Redirect::to('admin/products/index')->with('message', 'Forkert produkt');
	}
}

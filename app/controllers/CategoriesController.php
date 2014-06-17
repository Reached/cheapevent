<?php 

class CategoriesController extends Basecontroller {

	public function __contruct() {
		parent::__construct();
		$this->beforeFilter('csrf', array('on'=>'post'));
	}

	public function getIndex() {
		return View::make('categories.index')
			->with('categories', Category::all());
	}

	public function postCreate() {
		$validator = Validator::make(Input::all(), Category::$rules);

		if ($validator->passes()) {
			$category = new Category;
			$category->name = Input::get('name');
			$category->save();

			return Redirect::to('admin/categories/index')
				->with('message', 'Kategori blev oprettet');
		}

		return Redirect::to('admin/categories/index')
			->with('message', 'Noget gik galt')
			->withErrors($validator)
			->withInput();
	}

	public function postDestroy() {
		$category = Category::find(Input::get('id'));

		if($category) {
		   $category->delete();
		   return Redirect::to('admin/categories/index')
		   		->with('message', 'Kategori blev slettet');
		}

		return Redirect::to('admin/categories/index')
			->with('message', 'Kategori blev ikke slettet');
	}
} 

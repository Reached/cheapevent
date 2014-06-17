<?php

    class PageController extends Basecontroller {

    public function getCategoryPage() {

        $categories = array();

        foreach(Category::all() as $category) {
            $categories[$category->id] = $category->name;
        }

        return View::make('pages.categories.index')
            ->with('products', Product::all())
            ->with('categories', Category::all());
        }

        public function getTermsPage() {

            return View::make('pages.terms.index');
        }

        public function getAboutPage() {

            return View::make('pages.about.index');
        }


}

<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', array('uses'=>'StoreController@getIndex'));
Route::get('/handelsbetingelser', array('uses'=>'PageController@getTermsPage'));
Route::get('/om', array('uses'=>'PageController@getAboutPage'));
Route::get('/kontakt', array('uses'=>'ContactController@getContactPage'));
Route::get('/kategorier', array('uses'=>'PageController@getCategoryPage'));
Route::controller('store', 'StoreController');
Route::controller('users', 'UsersController');
Route::controller('orders', 'OrdersController');
Route::controller('contact', 'ContactController');
Route::get('/sign-out', array('as' => 'getSignout', 'uses' => 'UsersController@getSignout'));
Route::group(array('before' => 'auth'), function()
{
	Route::get('/admin', array('uses'=>'AdminController@getIndex'));
	Route::get('/admin/orders', array('uses'=>'AdminController@getOrders'));
	Route::controller('admin/categories', 'CategoriesController');
	Route::controller('admin/products', 'ProductsController');
	Route::controller('admin/bookings', 'BookingController');
});

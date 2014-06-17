<?php 

class UsersTableSeeder extends Seeder {
	public function run() {
		$user = new User;
		$user->firstname = 'admin';
		$user->lastname = 'admin';
		$user->email = 'info@cheapevent.com';
		$user->password = Hash::make('g5QqTjqNc4sj9tIR2zZW');
		$user->admin = 0;
		$user->save();
	}
}
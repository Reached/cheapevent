<?php 

class UsersTableSeeder extends Seeder {
	public function run() {
		$user = new User;
		$user->firstname = 'Casper';
		$user->lastname = 'Sørensen';
		$user->email = 'casper.aarby.sorensen@gmail.com';
		$user->password = Hash::make('Caspers88');
		$user->admin = 0;
		$user->save();
	}
}
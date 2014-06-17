<?php

class ContactController extends BaseController {

  public function __contruct() {
    parent::__construct();
    $this->beforeFilter('csrf', array('on'=>'post'));
  }

  public function getContactPage() {

      return View::make('pages.contact.index');
  }

  public function postCreate() {
    $validator = Validator::make(Input::all(), Contact::$rules);

    if ($validator->passes()) {

      $contactinfo = New Contact;
      $contactinfo->name = Input::get('name');
      $contactinfo->email = Input::get('email');
      $contactinfo->description = Input::get('description');

      $data = ['contact'=> $contactinfo];

      Mail::send('emails.message', $data, function($message) use ($contactinfo)
        {
            $message->to('casper.aarby.sorensen@gmail.com')
              ->subject("Ny besked");
        });

        return Redirect::to('/kontakt')
          ->with('message', 'Din besked blev sendt.');

      }
      return Redirect::to('/kontakt')->withErrors($validator);
  }

}

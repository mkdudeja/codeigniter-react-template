<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Account extends MY_Controller
{

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Controller intializations
        $this->lang->load('account');
        $this->load->library('email');
        $this->load->model('account_model', 'account');
    }

    public function login_post()
    {
        // To authenticate user and return JWT token
        $postData = $this->post();
        $this->form_validation->set_data($postData);
        if ($this->form_validation->run('loginForm')) {
            $userData = $this->account->login($postData);
            if ($userData && is_numeric($userData->id)) {
                $this->set_response($this->generate_token($userData), REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
            } else {
                // Wrong username/password
                $this->set_response($this->lang->line('invalid_credentials'), REST_Controller::HTTP_OK);
            }
        } else {
            // form validation errors
            $this->set_response(getErrorMessages(validation_errors()), REST_Controller::HTTP_EXPECTATION_FAILED);
        }
    }

    public function register_post()
    {
        // To register new user
        $postData = $this->post();
        $this->form_validation->set_data($postData);
        if ($this->form_validation->run('registerForm')) {
            $insertId = $this->account->register($postData);
            if ($insertId) {
                $this->set_response($this->lang->line('register_success'), REST_Controller::HTTP_OK);
            } else {
                $this->set_response($this->lang->line('register_error'), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            // form validation errors
            $this->set_response(getErrorMessages(validation_errors()), REST_Controller::HTTP_EXPECTATION_FAILED);
        }

    }

    public function forgotPassword_post()
    {
        // To check if user with the same username already exists
        $postData = $this->post();
        $this->form_validation->set_data($postData);
        if ($this->form_validation->run('passwordForm')) {
            $userData = $this->account->doesUserExist($postData);
            if ($userData && is_numeric($userData->id)) {
                $password = $this->account->resetPassword($userData);
                if ($password) {
                    $this->email->from('you@example.com', 'Your Name');
                    $this->email->reply_to('you@example.com', 'Your Name');
                    $this->email->to($userData->emailAddress);

                    $this->email->subject('Password Reset');
                    $this->email->message('This is my message');

                    if ($this->email->send()) {
                        $this->set_response("Password mailed successfully.", REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
                    } else {
                        $this->set_response("Email sending failed...", REST_Controller::HTTP_BAD_REQUEST);
                    }
                } else {
                    $this->set_response("Update failed...", REST_Controller::HTTP_BAD_REQUEST);
                }
            } else {
                // Wrong username, no user exist with the entered username
                $this->set_response($this->lang->line('invalid_credentials'), REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->set_response(getErrorMessages(validation_errors()), REST_Controller::HTTP_EXPECTATION_FAILED);
        }
    }

}

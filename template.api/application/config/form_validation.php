<?php

defined('BASEPATH') or exit('No direct script access allowed');

$config = array(
    'error_prefix' => '',
    'error_suffix' => '',
    'loginForm' => array(
        array(
            'field' => 'email',
            'label' => 'Username',
            'rules' => 'trim|required',
        ),
        array(
            'field' => 'password',
            'label' => 'Password',
            'rules' => 'trim|required',
        ),
    ),
    'registerForm' => array(
        array(
            'field' => 'name',
            'label' => 'Name',
            'rules' => 'trim|required',
        ),
        array(
            'field' => 'email',
            'label' => 'Email address',
            'rules' => 'trim|required',
        ),
        array(
            'field' => 'password',
            'label' => 'Password',
            'rules' => 'trim|required',
        ),
    ),
    'passwordForm' => array(
        array(
            'field' => 'email',
            'label' => 'Email address',
            'rules' => 'trim|required',
        ),
    ),
);

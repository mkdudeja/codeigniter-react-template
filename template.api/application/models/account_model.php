<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Account_model extends MY_Model
{

    public function __construct()
    {
        parent::__construct();

        // Table intilizations
        $this->_table = 'user';
    }

    public function login($userData)
    {
        $result = $this->db->select('*')
            ->from($this->_table)
            ->where('email', $userData['email'])
            ->get()->row();

        if ($result && is_numeric($result->id) && password_verify($userData['password'], $result->password)) {
            return $result;
        } else {
            return null;
        }
    }

    public function resetPassword($userData)
    {
        $password = substr(md5(openssl_random_pseudo_bytes(32)), 0, 8);
        $user = array(
            'auth_string' => $this->_generatePassword($password),
            'forgotpassword' => 1,
        );

        if ($this->update($userData->id, $user)) {
            return $password;
        } else {
            return false;
        }
    }

    public function register($userData)
    {
        //print_r($userData); return;
        $user = array(
            'name' => $userData['name'],
            'email' => $userData['email'],
            'password' => password_hash($userData['password'], PASSWORD_DEFAULT),
        );

        return $this->insert($user);
    }

    public function updateprofile($userdata)
    {
        $user = array(
            'name' => $userData['name'],
            'email' => $userData['email'],
            'password' => $this->_generatePassword($userData['password']),
        );

        if ($this->update($userdata["id"], $user)) {
            return $userdata;
        } else {
            return false;
        }
    }

}

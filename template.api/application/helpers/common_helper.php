<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

function getErrorMessages($errorString) {
    $errors = explode("\n", $errorString);
    unset($errors[count($errors) - 1]);
    return $errors;
}

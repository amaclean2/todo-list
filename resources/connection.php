<?php

    $host = Config::get('db/host');
    $username = Config::get('db/username');
    $password = Config::get('db/password');
    $database = Config::get('db/database');

    $db = new mysqli($host, $username, $password, $database);
    
    if (!$db) {
        die('Cannot connect to the database');
    }

?>
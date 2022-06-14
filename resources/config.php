<?php

$GLOBALS['config'] = array(
    'app' => array(
        'name' => 'Todo App'
    ),
    'db' => array(
        'username' => 'todo',
        'password' => 'todo',
        'host' => 'localhost',
        'database' => 'todo'
    )
);

class Config {
    public static function get($path = null) {
        if ($path) {
            $config = $GLOBALS['config'];
            $path = explode('/', $path);

            foreach ($path as $bit) {
                if (isset($config[$bit])) {
                    $config = $config[$bit];
                }
            }
            return $config;
        }

        return false;
    }
}

?>
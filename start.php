<?php
    session_start();

    require_once 'resources/config.php';
    require_once 'resources/connection.php';
    require_once 'resources/Todo.php';

    $todoList = new TodoList;
?>
<?php
require_once 'config.php';
require_once 'connection.php';

    if (isset($_POST['submit'])) {
        if (isset($_POST['todo-title']) && isset($_POST['todo-body'])) {
            if (strlen($_POST['todo-title']) > 0 && strlen($_POST['todo-body']) > 0) {

                $todoTitle = $_POST['todo-title'];
                $todoBody = $_POST['todo-body'];
                
                // $newTodo = new Todo($_POST['todo-title'], $_POST['todo-body']);
                // $todoList->addTodo($newTodo);

                $db->query("INSERT INTO todos (todo_title, todo_body) VALUES ('$todoTitle', '$todoBody')");

                header('location:../index.php');

            } else {
                $error =  'Please enter a title and a body';
            }
        } else {
            $error = 'Please enter a title and a body';
        }
    }

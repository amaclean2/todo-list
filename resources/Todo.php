<?php
    class Todo {
        private $todoTitle;
        private $todoBody;
        private $todoId;

        function __construct($title, $body) {
            $this->setTitle($title);
            $this->setBody($body);
        }

        function setTitle($title) {
            $this->todoTitle = $title;
        }

        function setBody($body) {
            $this->todoBody = $body;
        }

        function setId($id) {
            $this->todoId = $id;
        }

        function getTitle() {
            return $this->todoTitle;
        }

        function getBody() {
            return $this->todoBody;
        }

        function getId() {
            return $this->todoId;
        }
    }

    class TodoList {
        private $todoList = [];
        private $currentId = 0;
        
        function addTodo($todo) {
            $todo->setId($this->currentId);
            $this->currentId++;
            array_push($this->todoList, $todo);
        }

        function getTodoList() {
            return $this->todoList;
        }

        function getLength() {
            return count($this->todoList);
        }
    }
?>
import React from 'react';

import CreateTodo from './Application/Todos/create.container'
import TodoList from './Application/Todos/todos.container'

import './App.scss';

export default function App() {

	const renderHeader = <header className="flex-container">
		<h1>Todo List</h1>
	</header>

	return <div className="todo-list-app">
		{ renderHeader }
		<CreateTodo />
		<TodoList />
	</div>
}

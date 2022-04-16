import AddTodo from './AddTodo';
import TodoList from './TodoList';

import './App.scss';

const App = () => {
	return (
		<div className='todo-list-app-container'>
			<div className='todo-list-app'>
				<h1>Todo List</h1>
				<AddTodo />
				<TodoList />
			</div>
		</div>
	)
};

export default App;

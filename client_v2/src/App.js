import { useEffect, useState } from 'react';
import './App.scss';
import { useTodoContext } from './todoContext';

const AddTodo = () => {
  const [workingTodo, setWorkingTodo] = useState();

  const { updateTodoList } = useTodoContext();

  const createTodo = () => {
    updateTodoList(workingTodo)
  }

  return (
    <div>
      <input type="text" onChange={(e) => setWorkingTodo(e.target.value)} value={workingTodo} />
      <button onClick={createTodo}>Create Todo</button>
    </div>
  )
}

const TodoList = () => {
  const { todoList } = useTodoContext();
  const [workingTodoList, setWorkingTodoList] = useState(todoList);

  useEffect(() => {
    console.log(todoList);
    setWorkingTodoList(todoList);
  }, [todoList]);

  return (
    <ul>
      {workingTodoList?.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

const App = () => {
  return (
    <div className="todo-list-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
};

export default App;

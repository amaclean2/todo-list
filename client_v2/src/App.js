import { useEffect, useState } from 'react';
import './App.scss';
import { useTodoContext } from './todoContext';

const AddTodo = () => {
  const [workingTodo, setWorkingTodo] = useState('');

  const { addTodo } = useTodoContext();

  const createTodo = () => {
    addTodo(workingTodo);
    setWorkingTodo('');
  }

  return (
    <div>
      <input
        type='text'
        className={'todo-input'}
        autoFocus={true}
        placeholder={'What would you like to do today?'}
        onChange={(e) => setWorkingTodo(e.target.value)}
        value={workingTodo}
      />
      <button
        className={'todo-submit-button'}
        onClick={createTodo}
      >
        Create Todo
      </button>
    </div>
  )
}

const TodoFormatter = ({ todo }) => {
  const [ workingValue, setWorkingValue ] = useState(todo.message);
  const { setIsEditing, deleteTodo, updateTodo } = useTodoContext();

  return (todo.isEditing)
    ? (<>
      <input type='text'
        autoFocus={true}
        value={workingValue}
        onChange={(e) => setWorkingValue(e.target.value)}
      />
      <button onClick={() => updateTodo(todo.id, workingValue)}>
        {'✅'}
      </button>
    </>)
    : (
      <>
        <div className={'todo-contents'}>
          <div>{todo.message}</div>
          <div className={'todo-date'}>{todo.date}</div>
        </div>
        <button onClick={() => setIsEditing(todo.id)}>
          {'✏️'}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          {'❌'}
        </button>
      </>
    );
};

const TodoList = () => {
  const { todoList } = useTodoContext();

  return (
    <ul>
      {todoList?.map((item, key) => (
        <li key={`todo_${key}`}>
          <TodoFormatter todo={item} />
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  return (
    <div className='todo-list-app'>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
};

export default App;

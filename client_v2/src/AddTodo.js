import { useState } from 'react';
import { useTodoContext } from './TodoContext';

const AddTodo = () => {
    const [workingTodo, setWorkingTodo] = useState('');

    const { addTodo } = useTodoContext();

    const createTodo = () => {
        addTodo(workingTodo);
        setWorkingTodo('');
    };

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
    );
};

export default AddTodo;
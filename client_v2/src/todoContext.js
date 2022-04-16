import { createContext, useContext, useState } from 'react';
import { MONTH_ABREVIATIONS } from './constants';

const TodoContext = createContext();

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }

    return context;
};

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
        const date = new Date();
        newTodo = {
            message: newTodo,
            date: `${MONTH_ABREVIATIONS[date.getMonth() + 1]} ${date.getDate()}`,
            isEditing: false,
            id: todoList.length
        };

        setTodoList([...todoList, newTodo]);
    };

    const setIsEditing = (key) => {
        setTodoList([
            ...todoList.slice(0, key),
            {...todoList[key], isEditing: !todoList[key].isEditing},
            ...todoList.slice(key + 1)
        ]);
    };

    const updateTodo = (key, message) => {
        setTodoList([
            ...todoList.slice(0, key),
            {
                ...todoList[key],
                isEditing: !todoList[key].isEditing,
                message
            },
            ...todoList.slice(key + 1)
        ]);
    }

    const deleteTodo = (key) => {
        setTodoList([...todoList.slice(0, key), ...todoList.slice(key + 1)]);
    };

    return (
        <TodoContext.Provider
            value={{
                todoList,
                addTodo,
                deleteTodo,
                setIsEditing,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
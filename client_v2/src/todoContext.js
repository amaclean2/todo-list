import { createContext, useContext } from "react";

const TodoContext = createContext();

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }

    return context;
};

export const TodoProvider = ({ children }) => {
    const todoList = ["My Todo"];

    const updateTodoList = (newTodo) => {
        todoList.push(newTodo);
    }

    return (
        <TodoContext.Provider
            value={({
                todoList,
                updateTodoList
            })}
        >
            {children}
        </TodoContext.Provider>
    )
}
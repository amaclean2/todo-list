import { useTodoContext } from "./TodoContext";
import TodoFormatter from "./TodoFormatter";

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
    );
};

export default TodoList;
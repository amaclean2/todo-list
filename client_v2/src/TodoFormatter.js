import { useTodoContext } from "./TodoContext";
import TodoViewer from "./TodoViewer";

const TodoFormatter = ({ todo }) => {
    const { setIsEditing, deleteTodo } = useTodoContext();

    return (todo.isEditing)
        ? (<>
            <TodoViewer todo={todo} />
        </>)
        : (
            <>
                <div className={'todo-contents'}>
                    <div>{todo.message}</div>
                    <div className={'todo-date'}>{todo.date}</div>
                </div>
                <button onClick={() => setIsEditing(todo.id)}>
                    {'🔎'}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                    {'❌'}
                </button>
            </>
        );
};

export default TodoFormatter;
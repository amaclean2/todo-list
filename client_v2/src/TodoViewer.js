import { Card } from "./FormComponents";
import { useTodoContext } from "./TodoContext";

const TodoViewer = ({ todo }) => {
    const { setIsEditing } = useTodoContext();

    return (
        <Card title={todo?.message}>
            <div>
                
            </div>
            <footer>
                <button>
                    {'✏️'}
                </button>
                <button onClick={() => setIsEditing(todo.id)}>
                    {'❌'}
                </button>
            </footer>
        </Card>
    );
};

export default TodoViewer;
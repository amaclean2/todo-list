import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const TodoList = ({
    todos = [],
    request = () => {},
    deleteTodo,
    complete,
    updateCheck = true
}) => {
    const
        [viewState, setViewState] = useState(true)

    useEffect(() => {
        request()
    }, [request, updateCheck])

    const buildTodo = (todo, key) => <Todo
        key={`todo_${key}`}
        id={todo._id}
        complete={complete}
        completed={todo.completed}
        deleteTodo={deleteTodo}
        title={todo.title} />

    const renderTodos = (viewState)
        ? todos.map((e, i) => buildTodo(e, i))
        : todos.filter( e => !e.completed)
            .map( (e, i) => buildTodo(e, i))

    const renderFakeTodo = <FakeTodo />

    return <div className="todo-list">
        <ViewSwitcher
            viewState={viewState}
            setViewState={() => setViewState(!viewState)} />
        { (todos.length) ? renderTodos : renderFakeTodo }
    </div>
}

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    complete: PropTypes.func
}

const ViewSwitcher = ({
    viewState = 0,
    setViewState = () => {}
}) => {
    return <div className="view-switch flex-container">
        <label>
            <input
                className="view-input"
                onChange={() => setViewState()}
                checked={viewState === true}
                type="radio"
                name="completed" />
            <span className="view-label">Show All Todos</span>
        </label>
        <label>
            <input
                className="view-input"
                onChange={() => setViewState()}
                checked={viewState === false}
                type="radio"
                name="completed" />
            <span className="view-label">Show Uncompleted Todos</span>
        </label>
    </div>
}

ViewSwitcher.propTypes = {

}

const Todo = ({
    title = "",
    id = "0",
    deleteTodo = () => {},
    complete = () => {},
    completed = false
}) => {

    const renderCompleteBox = <label>
        <input className="complete-input" checked={completed} type="checkbox" onChange={() => complete(id)} />
        <div className="complete-box"></div>
    </label>

    return <div className="flex-container todo">
        { renderCompleteBox }
        { title }
        <div className="flex-spacer"></div>
        <button className="delete-button" onClick={() => deleteTodo(id)}><FaTimes className="times-icon" /></button>
    </div>
}

Todo.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    deleteTodo: PropTypes.func,
    complete: PropTypes.func,
    completed: PropTypes.bool
}

const FakeTodo = () => {

	const renderCompleteBox = <label>
        <input className="complete-input" type="checkbox" />
        <div className="complete-box"></div>
    </label>

    return <div className="flex-container fake-todo todo">
        { renderCompleteBox }
        Handle more internet traffic than Google
        <div className="flex-spacer"></div>
		<button className="delete-button" ><FaTimes className="times-icon" /></button>
    </div>
}

export default TodoList
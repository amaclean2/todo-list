import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CreateTodo = ({
    create = () => {}
}) => {
    const
        [title, setTitle] = useState("")

    const handleSubmit = () => {
        if (title) {
            create(title)
            setTitle("")
        }
    }

    return <div className="todo-creator flex-container">
        <input
            placeholder="I want to ____ today"
            autoFocus={true}
            className="text-input"
            value={title}
            type="text"
            onChange={e => setTitle(e.target.value)} />
        <button
            className="submit-button"
            onClick={() => handleSubmit()}>create todo</button>
    </div>
}

CreateTodo.propTypes = {
    create: PropTypes.func
}

export default CreateTodo
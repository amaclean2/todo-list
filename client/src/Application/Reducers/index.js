import { todos, todo } from '../Todos/Ducks/reducers'
import { combineReducers } from 'redux'

const todoApp = combineReducers({
    todos,
    todo
})

export default todoApp
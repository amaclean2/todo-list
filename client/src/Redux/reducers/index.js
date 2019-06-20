import { todos, todo } from '../../Application/Todos/Ducks/reducers'
import { combineReducers } from 'redux'

const tbApp = combineReducers({
	todos,
	todo
})

export default tbApp
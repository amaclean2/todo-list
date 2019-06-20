import * as actions from './actions'

const fetchTodos = () => {
	return dispatch => {
		dispatch(actions.requestTodos())
		return fetch(`/api/todos/all`, {
			method: "GET",
			headers: new Headers({'Content-Type': 'application/json'})
		}).then(resp => resp.json())
		.then(json => dispatch(actions.receiveTodos(json)))
		.catch(err => console.log(err))
	}
}

export const fetchTodo = id => {
	return dispatch => {
		dispatch(actions.requestTodo(id))
		if( id !== 0) {
			return fetch(`/api/todos/singular/${id}`, {
				method: "GET",
				headers: new Headers({ "Content-Type": "application/json" })
			}).then(resp => resp.json())
			.then(json => dispatch(actions.receiveTodo(json)))
			.catch(err => console.log(err))
		} else {
			dispatch(actions.receiveTodo({}))
		}
	}
}

export const saveTodo = title => {
	return dispatch => {
		return fetch(`/api/todos/save`, {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify({ title })
		}).then(resp => resp.json())
		.then(json => dispatch(actions.updateTodos()))
		.catch(err => console.log(err))
	}
}

export const editTodo = todo => {
	return dispatch => {
		return fetch(`/api/todos/update`, {
			method: "PUT",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify(todo)
		}).then(resp => resp.json())
		.then(json => dispatch(actions.updateTodos()))
		.catch(err => console.log(err))
	}
}

export const completeTodo = id => {
	return (dispatch, getState) => {
		const
			{ todos } = getState(),
			activeTodo = todos.data.find( todo => todo._id.toString() === id ),
			completedTodo = { ...activeTodo, completed: !activeTodo.completed }
		
		dispatch(editTodo(completedTodo))
	}
}

export const deleteTodo = id => {
	return dispatch => {
		return fetch(`/api/todos/delete/${id}`, {
			method: "DELETE",
			headers: new Headers({ "Content-Type": "application/json" }),
		}).then(resp => resp.json())
		.then(json => dispatch(actions.updateTodos()))
		.catch(err => console.log(err))
	}
}

export const update = newTodo => dispatch => {
    dispatch(actions.updateTodo(newTodo))
}

const shouldFetchTodos = state => {
	const todos = state.todos
	if (!todos) return true
	else if (todos.needsUpdate === undefined) return true
	else if (todos.needsUpdate === true) return true
	else return false
}

export const fetchIfNeeded = () => {
	return (dispatch, getState) => {
		if(shouldFetchTodos(getState())) {
			dispatch(fetchTodos())
		}
	} 
}
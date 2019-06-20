import { pluralTypes, singularTypes } from './types'

export const requestTodos = () => ({
	type: pluralTypes.requestTodos
})

export const receiveTodos = json => ({
	type: pluralTypes.receiveTodos,
	data: json.data,
	totalCount: json.total_count,
	receivedAt: Date.now()
})

export const requestTodo = id => ({
	type: singularTypes.requestTodo,
	id: id
})

export const receiveTodo = json => ({
	type: singularTypes.receiveTodo,
	data: json.data,
	receivedAt: Date.now()
})

export const updateTodo = json => ({
    type: singularTypes.updateTodo,
    data: json
})

export const updateTodos = json => ({
	type: pluralTypes.updateTodos
})
const
	{ Todo } = require('../schemas/todoSchema'),
	{ ObjectId } = require('mongoose').Types,
	{ handleDBResponse } = require('../helpers')

const getAll = cb => {
	const query = Todo.find({})
	query.exec((err, docs) => handleDBResponse(cb, err, docs))
}

const getIndividual = (id, cb) => {
	const query = Todo.findById(id)
	query.exec((err, docs) => handleDBResponse(cb, err, docs ))
}

const save = (body = {}, cb) => {
	const
		newTodo = new Todo({...body})
	newTodo.save( (err, todo) => handleDBResponse(cb, err, todo))
}

const update = (body, cb) => {
	const _id = new ObjectId(body._id)

	delete body.id
	const
		newTodo = new Todo({...body}),
		query = Todo.replaceOne({ _id }, newTodo)

	query.exec( (err, todo) => handleDBResponse(cb, err, todo))
}

const deleteItem = (id, cb) => {
	const
		_id = new ObjectId(id),
		query = Todo.deleteOne({ _id })

	query.exec((err, data) => handleDBResponse(cb, err, data))
}

module.exports = {
	getAll,
	getIndividual,
	save,
	update,
	deleteItem
}
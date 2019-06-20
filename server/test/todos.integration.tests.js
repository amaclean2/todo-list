const
	mongoose = require('mongoose'),
	{ Todo } = require('../schemas/todoSchema'),
	{ ObjectID } = require('mongoose').Types,
	chai = require('chai'),
	{ expect } = require('chai'),
	chaiHttp = require('chai-http'),
	app = require('../app')

const
	todo = new Todo({ title: "Run tests" })

chai.use(chaiHttp)

describe(`Integration tests`, () => {
	describe(`Create new entries`, () => {

		it(`get all todos`, done => {
			chai.request(app)
				.get(`/api/todos/all`)
				.end((err, res) => {
					expect(res).to.have.status(200)
					expect(res).to.have.property('body')
					expect(res.body).to.have.property('data')
					expect(res.body.data).to.be.empty
					done()
				})
		})

		it(`make a todo`, done => {
			chai.request(app)
				.post(`/api/todos/save`)
				.type("form")
				.send({ title: "Test todos" })
				.end((err, res) => {
					expect(res).to.have.status(200)
					expect(res).to.have.property("body")
					expect(res.body).to.have.property("data")
					done()
				})
		})

		it(`get all todos with one made`, done => {
			chai.request(app)
				.get(`/api/todos/all`)
				.end((err, res) => {
					expect(res).to.have.status(200)
					expect(res).to.have.property("body")
					expect(res.body).to.have.property("data")
					expect(res.body.data).to.have.lengthOf(1)
					Todo.deleteMany()
					done()
				})
		})

		it(`get one todo`, done => {
			todo.save( err => {
				chai.request(app)
					.get(`/api/todos/single/${todo._id}`)
					.end( (err, res) => {
						expect(res).to.have.status(200)
						expect(res).to.have.property("body")
						expect(res.body).to.have.property("data")
						expect(res.body.data).to.have.property("title")
						Todo.deleteOne({ _id: todo._id })
						done()
					})
			})
		})

		it(`alter a todo`, done => {
			// make a new todo
			todo.save( err => {
				// call an API to change the todo
				chai.request(app)
					.put(`/api/todos/update`)
					.send({
						_id: todo._id,
						title: "New todos",
						completed: true
					})
					.end( (err, res) => {
						expect(res).to.have.status(200)
						expect(res).to.have.property("body")

						// check to make sure that the todo validates
						Todo.findById(todo._id.toString(), (err, doc) => {
							expect(doc).to.be.a("object")
							expect(doc).to.have.property("title")
							expect(doc.title).to.equal("New todos")
							done()
						})
					})
			})
		})

		it(`delete a todo`, done => {
			chai.request(app)
				.delete(`/api/todos/delete/${todo._id}`)
				.end( (err, res) => {
					expect(res).to.have.status(200)
					expect(res).to.have.property("body")
					expect(res.body).to.have.property("data")
					expect(res.body.data).to.have.property("deletedCount")
					expect(res.body.data.deletedCount).to.equal(1)
					done()
				})
		})
	})
})
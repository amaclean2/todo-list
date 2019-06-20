const
    mongoose = require('mongoose'),
    { ObjectID } = require('mongoose').Types,
    { Todo } = require('../schemas/todoSchema'),
    { expect } = require('chai')

const
    invalidTodo = new Todo({}),
    todo = new Todo({ title: "Run tests" })

describe('Unit tests', () => {
    describe(`Creating new entries`, () => {
        beforeEach( done => {
            mongoose.connection.collections.todos.drop(() => done())
        })

        it(`fail validation`, done => {
            invalidTodo.save( err => {
                expect(err).to.exist
                done()
            })
        })

        it(`pass validation and save`, done => {
            todo.save( err => {
                expect(todo.isNew).to.be.false
                done()
            })
        })
    })

    describe(`Handling existing entries`, () => {
        it(`find an element`, done => {
            Todo.find({}, (err, todos) => {
                expect(todos).to.be.a("array")
                expect(todos).to.have.lengthOf(1)
                done()
            })
        })

        it(`find an element by id`, done => {
            Todo.findById(todo._id, (err, foundTodo) => {
                expect(foundTodo).to.be.a("object")
                expect(foundTodo).to.have.property('title')
                expect(foundTodo.title).to.equal('Run tests')
                done()
            })
        })

        it(`update element`, done => {
            Todo.updateOne({ _id: todo._id }, { title: "Edit tests" }, (err, updated) => {
                expect(updated).to.have.property('n')
                expect(updated.n).to.equal(1)
                done()
            })
        })

        it(`delete element`, done => {
            Todo.deleteOne({ _id: todo._id }, (err, deleted) => {
                expect(deleted).to.have.property('n')
                expect(deleted.n).to.equal(1)
                done()
            })
        })
    })
})
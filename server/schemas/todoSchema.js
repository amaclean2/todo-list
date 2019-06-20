const
    { Schema, model } = require("mongoose")

const todoSchema = Schema({
    created_at: {
        type: Number,
        default: Date.now()
    },
    title: {
        type: String,
        required: [true, 'Todo title is required']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

exports.Todo = model("Todo", todoSchema)
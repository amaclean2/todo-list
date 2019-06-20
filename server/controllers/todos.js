const
    express = require('express'),
    app = express(),
    { getAll, getIndividual, save, update, deleteItem } = require('../models/todos'),
    { sendData } = require('../helpers')

app.get('/all', (req, res) => {
    getAll((err, data) => {
        sendData(res, err, data)
    })
})

app.get('/single/:id', (req, res) => {
    const id = req.params.id

    if (!id) {
        sendData(res, "id field required")
        return
    }

    getIndividual(id, (err, data) => {
        sendData(res, err, data)
    })
})

app.post('/save', (req, res) => {
    save(req.body, (err, data) => {
        sendData(res, err, data)
    })
})

app.put('/update', (req, res) => {
    update(req.body, (err, data) => {
        sendData(res, err, data)
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    if (!id) {
        sendData(res, "id field required")
        return
    }
    
    deleteItem(req.params.id, (err, data) => {
        sendData(res, err, data)
    })
})

module.exports = app
const
    express = require("express"),
    app = express()


app.use('/todos', require('./todos'))

app.get('/', (req, res) => {
    res.status(200).json({
        HIT: true
    })
})

module.exports = app
const
    express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = 5000,
    url = "mongodb://mongo:27017/docker-node"

mongoose.Promise = global.Promise
mongoose.connect(url, { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*')
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
	response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

	next()
})

app.use(`/api`, require('./controllers'))

app.listen(PORT)
console.log(`App running at http://localhost:${PORT}`)
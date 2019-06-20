const
    mongoose = require("mongoose"),
    url = "mongodb://localhost:27017/todos"

mongoose.Promise = global.Promise
mongoose.connect(url, { useNewUrlParser: true })
mongoose.connection
    .once("open", () => console.log("connected"))
    .on("error", err => console.warn(`Error: ${err}`))


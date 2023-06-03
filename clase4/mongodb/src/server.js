require("dotenv").config()
const express = require("express")
const moongose = require("mongoose")
const {errorLogger, errorHandler} = require('./middlewares/handlers')
const http = require("http")
const { Server } = require("socket.io")
require("express-async-errors")

const app = express();
app.use(express.json())
app.use("/", require("./routes"))
app.use(errorLogger)
app.use(errorHandler)

///server instance using express app
///http:localhost
const server = http.createServer(app)

///socket connection
///ws://localhost
const io = new Server(server, {
    cors:
        { origins: "*" }
})
io.on("connection", require("./controllers/ioController"))

const dbInstance = require("./config/postgresql");

const port = process.env.PORT || 8000;
const start = async () => {
    try {
        await dbInstance.sync({force: true})
        //await dbInstance.sync()
        await moongose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        server.listen(port, () => {
            console.log("running")
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start()
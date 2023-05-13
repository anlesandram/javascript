require("dotenv").config()
require("express-async-errors");
const express = require("express")
const moongose = require("mongoose")
const handlers = require('./middlewares/handlers');

const app = express();

app.use(express.json()) 
app.use("/", require("./routes"))
app.use(handlers.errorLogger)
app.use(handlers.errorHandler)
const dbInstance = require("./config/postgresql");

const port = process.env.PORT || 8000;
const start = async () => {
    try {
        await dbInstance.sync()
        await moongose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(port, () => {
            console.log("running")
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start()
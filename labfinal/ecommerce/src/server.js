require("dotenv").config()
const express = require("express")
const moongose = require("mongoose")
const {errorLogger, errorHandler} = require('./middlewares/handlers')
require("express-async-errors")

const app = express();
app.use(express.json())
app.use("/", require("./routes"))
app.use(errorLogger)
app.use(errorHandler)


const port = process.env.PORT || 8000;
const start = async () => {
    try {
        await moongose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        //moongose.set('debug', true);
        app.listen(port, () => {
            console.log("running")
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start()
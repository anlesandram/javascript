
//Just in case
const io = require("socket.io")(3001, {
    cors: { origin: "*" }
})

io.on("connection", require("../controllers/ioController"))


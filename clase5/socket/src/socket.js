const io = require("socket.io")(3001, {
    cors: { origin: "*" }
})


io.on("connection", (socket) => {

    socket.on("message", (payload) => {
        console.log("message")
        socket.emit("message", payload)
    })

    socket.on("offer", (payload) => {
        console.log("received offer")
        socket.emit("offer updated", payload)
    })

    socket.on("disconnect", () => {
        console.log("conection closed")
    })

    socket.on("plant", (payload) => {
        console.log("received plant", payload)
    })

    socket.emit("status", "successfully connected")
})





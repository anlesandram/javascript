const http = require("http")

const host = "localhost"
const port = "8080"

const products = [
    {
        name: "reloj",
        price: 2000,
        quantity: "2"
    },
    {
        name: "correa",
        price: 2000,
        quantity: "3"
    },
    {
        name: "sombrero",
        price: 1000,
        quantity: "2"
    }
]

const writeJsonResponse = (res, json) => {

    console.log(json)
    res.setHeader("Content-Type", "text/json")
    res.writeHead(200)
    res.end(JSON.stringify(json))
}

const deleteProduct = (product) => {
    if (product) {
        const indexOfProduct = products.findIndex(
            (element) => element.name === product
        );

        if (indexOfProduct !== -1) {
            products.splice(indexOfProduct, 1);
        }
    }
}

const server = http.createServer(async (req, res) => {
    const url = req.url
    const method = req.method
    let body = ""

    await req.on("data", (chunck) => {
        body += chunck
    })


    if ("/api/v1/products") {
        if (method == "GET") {
            writeJsonResponse(res, products)
        }
        else if (method == "POST") {
            products.push(JSON.parse(body))
            writeJsonResponse(res, products)
        } else if (method == "DELETE") {
            const product = JSON.parse(body)
            deleteProduct(product.name)
            writeJsonResponse(res, products)

        }
    }
})

server.listen(port, host, () => {
    console.log(`servidor corriendo http://${port}:${host}`)
})
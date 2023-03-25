const express = require("express")
const port = 8000;
const app = express();
app.use(express.json())

const products = [
    {
        id: 1,
        name: "reloj",
        price: 2000,
        quantity: "2"
    },
    {
        id: 2,
        name: "correa",
        price: 2000,
        quantity: "3"
    },
    {
        id: 3,
        name: "sombrero",
        price: 1000,
        quantity: "2"
    }
]


app.get("/", (req, res) => {
    res.send("Server running")
});


app.get("/api/v1/products/:productId", (req, res) => {
    const {productId} = req.params;
    const product = products.find(product => product.id === parseInt(productId))
    
    res.send(product)
});


app.post("/api/v1/products", (req, res) => {
    const product = req.body;
    products.push(product);
    
    res.json(product)
});


app.delete("/api/v1/products/:productId", (req, res) => {
    const {productId} = req.params;
    const indexProduct = products.findIndex(product => product.id === parseInt(productId))
    
    if (indexProduct !== -1) {
        products.splice(indexProduct, 1);
    }

    res.json(products)
});


app.delete("/api/v1/remove/products", (req, res) => {
    const product = req.body;
    const indexProduct = products.findIndex(item => item.id === product.id)

    if (indexProduct !== -1) {
        products.splice(indexProduct, 1);
    }
    
    res.json(products)
});


app.listen(port, () => {
    console.log("escuchando")
})
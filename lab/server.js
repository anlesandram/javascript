const productTransaction = require('./src/transaction/producTransaction');
const errorProcessor = require('./src/handler/errorProcessor');
const productScheme = require('./src/validation/productScheme');

const express = require("express")

const port = 8000;
const app = express();
app.use(express.json())


let products = [];


app.get("/", (req, res) => {
    res.send("Server running")
});


app.get("/api/v1/products", (req, res) => {
    res.send(products)
});


app.post("/api/v1/products", (req, res, next) => {
    const body = req.body;
    const { error, value } = productScheme.validate(body);

    error ? next(new Error(error)) :
        res.send(productTransaction
            .createProduct(body, products))
});


app.patch("/api/v1/products/:productId", (req, res, next) => {
    const body = req.body;
    const { productId } = req.params;
    const { error, value } = productScheme.validate(body);

    error ? next(new Error(error)) :
        res.send(productTransaction.
            modifyProduct(body, productId, products))
});


app.delete("/api/v1/products/:productId", (req, res) => {
    const { productId } = req.params;
    const product = productTransaction.deleteProduct(productId, products);
    res.json(`Product ${product.name} was removed`);
})



app.use(errorProcessor.errorLogger)
app.use(errorProcessor.errorHandler)

app.listen(port, () => {
    console.log("Server Running")
    productTransaction.initProductRepo(products);
})
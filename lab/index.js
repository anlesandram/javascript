
const fs = require('fs');
const path = require('path');
const express = require("express")
const Joi = require('joi');

const port = 8000;
const app = express();

app.use(express.json())


const productScheme = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.string().required(),
    category: Joi.string().required(),
  });



const filePath = path.resolve(`${__dirname}/products_repo.txt`)

let products = [];

const readProductRepo = async () => {
    var data = await fs.promises.readFile(filePath, 'utf-8');
    processProduct(data);
}

const processProduct = (data) => {
    if (data.length != 0) {
        let items = data.toString().split("\n");
        items.forEach(value => {
            if (value != "") {
                products.push(JSON.parse(value));
            }
        })}
}

const addProductRepo = async (product) => { 
    await fs.promises.appendFile(filePath, `${JSON.stringify(product)}\n`)
}


const modifyProductRepo = async() => {
    let data = "";
    products.forEach(value => data += `${JSON.stringify(value)}\n`)
    await fs.promises.writeFile(filePath, data)
}


app.get("/", (req, res) => {
    res.send("Server running")
});


//Retrieve All Products
app.get("/api/v1/products", (req, res) => {
    res.send(products)
});


//Add Product
app.post("/api/v1/products", (req, res, next) => {
    let body = req.body;
    const { error, value } =  productScheme.validate(body);

    if (error) {
        next(new Error(error));
      } else {
        var newProduct = body;
        var index = products.length + 1;
        newProduct = { id: index, ...newProduct }
    
        
        products.push(newProduct);
        addProductRepo(newProduct);
    
        const product = products.slice(-1);
    
        res.json(product);
      }
});


//Modify Product 
app.patch("/api/v1/products/:productId", (req, res) => {
    const body = req.body;
    const { productId } = req.params;
    const indexProduct = products.findIndex(product => product.id === parseInt(productId))

    if (indexProduct == -1) {
        throw new Error("Product not Found");
    }

    products[indexProduct].name = body.name;
    products[indexProduct].price = body.price;
    products[indexProduct].quantity = body.quantity;
    modifyProductRepo();

    res.send(products[indexProduct])
});


//Delete Product
app.delete("/api/v1/products/:productId", (req, res) => {
    const { productId } = req.params;
    const indexProduct = products.findIndex(product => product.id === parseInt(productId))
    let product = "";

    if (indexProduct !== -1) {
        product = products[indexProduct];
        products.splice(indexProduct, 1);
    } else {
        throw new Error("Product not Found");
    }
    modifyProductRepo();

    res.json(`Product ${product.name} was removed `);
})


const errorLogger = (err, req, res, next) => {
    console.log(err);
    next(err);
}

const errorHandler = (err, req, res, next) => {
    res.status(400).json({
        message: err.message,
    })
}


//Error middleware, it is executed in the order that we are defining the use function
app.use(errorLogger)
app.use(errorHandler)

app.listen(port, () => {
    readProductRepo();

})
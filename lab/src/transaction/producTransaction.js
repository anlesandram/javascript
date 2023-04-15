const productRepository = require('../repository/productRepository');
const {v4 : uuidv4} = require('uuid')

const initProductRepo = (products) => {
    productRepository.readElement(products);
}

const createProduct = (newProduct, products) => {
    const index = uuidv4();
    newProduct = { id: index, ...newProduct }


    products.push(newProduct);
    productRepository.insertElement(newProduct);

    return products.slice(-1);

}

const modifyProduct = (newProduct, productId, products) => {
    const indexProduct = products
        .findIndex(product => product.id === productId)

    if (indexProduct == -1) {
        throw new Error("Product not Found");
    }

    products[indexProduct].name = newProduct.name;
    products[indexProduct].price = newProduct.price;
    products[indexProduct].quantity = newProduct.quantity;
    productRepository.updateElement(products);

    return products[indexProduct];

}

const deleteProduct = (productId, products) => {
    const indexProduct = products
        .findIndex(product => product.id === productId)
    let product = "";

    if (indexProduct !== -1) {
        product = products[indexProduct];
        products.splice(indexProduct, 1);
    } else {
        throw new Error("Product not Found");
    }
    productRepository.updateElement(products);

    return product;
}


module.exports.initProductRepo = initProductRepo;
module.exports.createProduct = createProduct;
module.exports.modifyProduct = modifyProduct;
module.exports.deleteProduct = deleteProduct;
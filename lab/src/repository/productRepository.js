
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(`products_repo.txt`)

const readElement = async (products) => {
    var data = await fs.promises.readFile(filePath, 'utf-8');
    processElement(data, products);
}

const processElement = (data, products) => {
    if (data.length != 0) {
        let items = data.toString().split("\n");
        items.forEach(value => {
            if (value != "") {
                products.push(JSON.parse(value));
            }
        })
    }
}

const insertElement = async (data) => {
    await fs.promises.appendFile(filePath, `${JSON.stringify(data)}\n`)
}


const updateElement = async (elements) => {
    let data = "";
    elements.forEach(item => data += `${JSON.stringify(item)}\n`)
    await fs.promises.writeFile(filePath, data)
}

module.exports.readElement = readElement;
module.exports.insertElement = insertElement;
module.exports.updateElement = updateElement;
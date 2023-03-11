const fs = require('fs');
const path = require('path');

const processFile = async(...args) => {
    const filePath = path.resolve(`${__dirname}/archivo.txt`)
    if(args[0] == "R"){
        const data = await fs.promises.readFile(filePath, 'utf-8');
        console.log(data)
        
    }else {
        await fs.promises.writeFile(filePath, args[1]);
    }
}

const readFile = async() => {
    try{
        const filePath = path.resolve(`${__dirname}/archivo.txt`);
        const data = await fs.promises.readFile(filePath, 'utf-8');

        console.log(data)
    }catch(error)
    {
        console.log(error);
    }
}


const writeFile = async(texto) =>{
    try{
        console.log(texto)
        const filePath = path.resolve(`${__dirname}/archivo.txt`);
        await fs.promises.writeFile(filePath, texto);
    }catch(error)
    {
        console.log(error);
    }
}

processFile('R')

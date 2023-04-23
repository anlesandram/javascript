const moongose = require("mongoose");

const ProductScheme = moongose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: false },
    availableUnits: { type: Number, require: false, default: 0 },
    price: { type: Number, require: true },
    category: { type: String, require: true }
})

exports.Product = moongose.model("products", ProductScheme);


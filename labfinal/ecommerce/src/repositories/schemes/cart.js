const moongose = require("mongoose");

const CartScheme = moongose.Schema({
    items: { type: Array, require: false }
})

exports.Cart = moongose.model("carts", CartScheme);


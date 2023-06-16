const moongose = require("mongoose");

const OrderScheme = moongose.Schema({
    userId: { type: String, require: false },
    cartId: { type: String, require: true },
    items: { type: Array, require: false },
    address: { type: String, require: true },
    totalPrice: { type: Number, require: false, default: 0 },
    paymentId: { type: String, require: false, default: '' }
})

exports.Order = moongose.model("orders", OrderScheme);


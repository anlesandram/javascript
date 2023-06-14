const moongose = require("mongoose");

const PaymentScheme = moongose.Schema({
    orderId: { type: String, require: true },
    cardId: { type: String, require: true },
    description: { type: String, require: true }
})


exports.Payment = moongose.model("payment", PaymentScheme);


const moongose = require("mongoose");

const PaymentScheme = moongose.Schema({
    orderId: { type: String, require: true },
    cardId: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: false,  default: 'rejected'  }
})

PaymentScheme.post('save', function (next) {
    try {
        this.status = 'approved'
        return next();
    } catch (err) {
        return next(err);
    }
});

exports.Payment = moongose.model("payment", PaymentScheme);


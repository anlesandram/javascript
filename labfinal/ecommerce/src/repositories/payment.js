const { Payment } = require("./schemes/payment")


exports.insertElement = async (data) => {
    return await new Payment(data).save()
}



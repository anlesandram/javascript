const { Payment } = require("./schemes/payment")


exports.insertElement = async (data) => {
    await new Payment(data).save()
}

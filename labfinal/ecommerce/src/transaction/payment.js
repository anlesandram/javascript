const repository = require('../repositories/payment')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers


exports.makePayment = async (payment) => {
    //TODO validate if order exists
    //TODO update product stock
    //TODO update order payment Id 


    await repository.insertElement(payment);
}

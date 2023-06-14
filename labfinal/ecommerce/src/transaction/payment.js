const repository = require('../repositories/payment')
const {NotFoundError} = require('../mappers/custom.exception').errorMappers
const transactionCart = require('../transaction/cart');
const transactionOrder = require('../transaction/order');
const transactionProduct = require('../transaction/product');


exports.makePayment = async (payment) => {
    const orderId = payment.orderId
    

    //validate if order exists
    const order = await transactionOrder.retrieveOrder(orderId)
    const cartId = order.cartId
    
    //make Payment
    const result = await repository.insertElement(payment);
    const paymentId = result._id


    //update order payment Id 
    await transactionOrder.updateOrderPaymentInfo(orderId, paymentId)


    const cart = await transactionCart.retrieveCart(cartId)

    //update product stock
    await transactionProduct.updateProductQuantity(cart.items)
    
    return paymentId
}

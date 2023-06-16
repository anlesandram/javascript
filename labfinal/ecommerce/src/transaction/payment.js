const repository = require('../repositories/payment')
const {ValidationError} = require('../mappers/custom.exception').errorMappers
const transactionCart = require('../transaction/cart');
const transactionOrder = require('../transaction/order');
const transactionProduct = require('../transaction/product');


exports.makePayment = async (payment, userId) => {
    const orderId = payment.orderId

    //validate if order exists
    const order = await transactionOrder.getOrderByUserId(orderId, userId)
    const cartId = order.cartId

    if(order.paymentId){
        throw ValidationError("The order is paid")
    }
    
    //make Payment
    const result = await repository.insertElement(payment);
    const paymentId = result._id.valueOf()


    //update order payment Id 
    await transactionOrder.updateOrderPaymentInfo(orderId, paymentId)


    const cart = await transactionCart.retrieveCart(cartId)

    //update product stock
    await transactionProduct.updateProductQuantity(cart.items)
    
    return paymentId
}

const { Router } = require("express")
const router = Router()
const path = require("path");


//controllers
const userController = require('../controllers/user')
const productController = require('../controllers/product')
const cartController = require('../controllers/cart')
const orderController = require('../controllers/order')
const paymentController = require('../controllers/payment')
const { login, restrictedView } = require("../controllers/authController")

//middleware
const middlewares = require('../middlewares/validations')
const { isAuth } = require("../middlewares/handlers")

//joi
const productScheme = require('../middlewares/joi/product.scheme')
const userScheme = require('../middlewares/joi/user.scheme')
const cartScheme = require('../middlewares/joi/cart.scheme')
const orderScheme = require('../middlewares/joi/order.scheme')
const paymentScheme = require('../middlewares/joi/payment.scheme')
const idScheme = require('../middlewares/joi/id.scheme')


const BASE_PRODUCTS = "/api/v1/products"
const BASE_USERS = "/api/v1/users"
const BASE_CARTS = "/api/v1/carts"
const BASE_ORDERS = "/api/v1/orders"
const BASE_PAYMENT = "/api/v1/payment"


router
    .get("/health", (_, res) => res.send("check"))

//login
router
    .post("/auth/login", login)
    .get("/auth/confidential", isAuth, restrictedView)

//products
router.route(BASE_PRODUCTS)
    .get(productController.getProducts)
    .post(middlewares.validateBody(productScheme.productBody), productController.createProduct)

router.route(BASE_PRODUCTS + "/:productId")
    .delete(middlewares.validateId(idScheme.idValidation, "productId"), productController.deleteProduct)
    .patch([middlewares.validateId(idScheme.idValidation, "productId"), middlewares.validateBody(productScheme.productBody)], productController.updateProduct)

//users
router.route(BASE_USERS)
    .get(userController.getUsers)
    .post(middlewares.validateBody(userScheme.userBody), userController.createUser)

router.route(BASE_USERS + "/:userId")
    .delete(middlewares.validateId(idScheme.idValidation, "userId"), userController.deleteUser)
    .patch([middlewares.validateId(idScheme.idValidation, "userId"), middlewares.validateBody(userScheme.userBody)], userController.updateUser)

//carts
router.route(BASE_CARTS)
    .get(cartController.getCarts)
    .post(cartController.createCart)

router.route(BASE_CARTS + "/:cartId")
    .delete(middlewares.validateId(idScheme.idValidation, "cartId"), cartController.deleteCart)
    .put([middlewares.validateId(idScheme.idValidation, "cartId"), middlewares.validateBody(cartScheme.cartBody)], cartController.updateCartItems)

//orders
router.route(BASE_ORDERS)
    .get(orderController.getOrders)
    .post(middlewares.validateBody(orderScheme.orderBody), orderController.createOrder)

router.route(BASE_ORDERS + "/:orderId")
    .delete(middlewares.validateId(idScheme.idValidation, "orderId") ,orderController.deleteOrder)


 //payment
router.route(BASE_PAYMENT)
    .post(middlewares.validateBody(paymentScheme.paymentBody), paymentController.makePayment)   

module.exports = router;


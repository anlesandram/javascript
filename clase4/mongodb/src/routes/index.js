const { Router } = require("express")
const router = Router()
const userController = require('../controllers/user')
const productController = require('../controllers/product')


const middlewares = require('../middlewares/validations')
const productScheme = require('../models/product.scheme')
const userScheme = require('../models/user.scheme')

const BASE_PRODUCTS = "/api/v1/products"
const BASE_USERS = "/api/v1/users"

router
    .get("/health", (_, res) => res.send("check"))

router.route(BASE_PRODUCTS)
    .get(productController.getProducts)
    .post(middlewares.validateBody(productScheme.productBody), productController.createProduct)

router.route(BASE_PRODUCTS + "/:productId")
    .delete(productController.deleteProduct)
    .patch(middlewares.validateBody(productScheme.productBody), productController.updateProduct)

router.route(BASE_USERS)
    .get(userController.getUsers)
    .post(middlewares.validateBody(userScheme.userBody), userController.createUser)

router.route(BASE_USERS + "/:userId")
    .delete(userController.deleteUser)
    .patch(middlewares.validateBody(userScheme.userBody), userController.updateUser)

module.exports = router;


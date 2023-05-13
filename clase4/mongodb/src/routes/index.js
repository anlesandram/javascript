const { Router } = require("express")
const router = Router()
const userController = require('../controllers/user')
const productController = require('../controllers/product')


const middlewares = require('../middlewares/product.validations')
const schemes = require('../models/product.scheme')

const BASE_PRODUCTS = "/api/v1/products"
const BASE_USERS = "/api/v1/users"

router
    .get("/health", (_, res) => res.send("check"))

router.route(BASE_PRODUCTS)
    .get(productController.getProducts)
    .post(middlewares.validateBody(schemes.productBody), productController.createProduct)

router.route(BASE_PRODUCTS + "/:productId")
    .delete(productController.deleteProduct)
    .patch(middlewares.validateBody(schemes.productBody), productController.updateProduct)

router.route(BASE_USERS)
    .get(userController.getUsers)
    .post(userController.createUser)

router.route(BASE_USERS + "/:userId")
    .delete(userController.deleteUser)
    .patch( userController.updateUser)

module.exports = router;


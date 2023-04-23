const { Router } = require("express")
const router = Router()
const controller = require('../controllers/controller')
const middlewares = require('../middlewares/product.validations')
const schemes = require('../models/product.scheme')

const BASE = "/api/v1/products"

router
    .get("/health", (_, res) => res.send("check"))

router.route(BASE)
    .get(controller.getProducts)
    .post(middlewares.validateBody(schemes.productBody), controller.createProduct)

router.route(BASE + "/:productId")
    .delete(controller.deleteProduct)
    .patch(middlewares.validateBody(schemes.productBody), controller.updateProduct)

module.exports = router;


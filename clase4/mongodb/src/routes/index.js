const { Router } = require("express")
const router = Router()
const controller = require('../controllers/controller')
const {middleware} = require('../middlewares/handlers')
const schemes = require('../models/product.scheme')

const BASE = "/api/v1/products"

router
    .get("/health", (_, res) => res.send("check"))

router.route(BASE)
    .get(controller.getProducts)
    .post(middleware(schemes.productScheme), controller.createProduct)

router.route(BASE + "/:productId")
    .delete(controller.deleteProduct)
    .patch(middleware(schemes.productScheme), controller.updateProduct)

module.exports = router;


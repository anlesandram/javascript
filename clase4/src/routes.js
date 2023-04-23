const { Router } = require("express")
const router = Router();
const controller = require('./controller');

const BASE = "/api/v1/products"

router
    .get("/health", (_, res) => res.send("check"))
    // .get(BASE,validator ,async (req, res) => { TODO JOI middleware

router.route(BASE)
    .get(controller.getProducts)
    .post(controller.createProduct)

router.route(BASE + "/:productId")
    .delete(controller.deleteProduct)
    .patch(controller.updateProduct)

module.exports = router;


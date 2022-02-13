const { ProductController } = require('../controllers')
const route = require("express").Router()

route.get("/", ProductController.getProducts)
route.get("/:product_id", ProductController.getProduct)
route.post("/", ProductController.createProduct)
route.delete("/:product_id", ProductController.deleteProduct)
route.put("/:product_id", ProductController.updateProduct)

module.exports = route
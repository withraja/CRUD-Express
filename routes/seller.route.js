const { SellerController } = require('../controllers')
const route = require("express").Router()

route.get("/", SellerController.getSellers)
route.get("/:seller_id", SellerController.getSeller)
route.post("/", SellerController.createSeller)

module.exports = route
const { SellerController } = require('../controllers')
const route = require("express").Router()

route.get("/", SellerController.getSellers)
route.get("/:seller_id", SellerController.getSeller)
route.post("/", SellerController.createSeller)
route.delete("/:seller_id", SellerController.deleteSeller)
route.put("/:seller_id", SellerController.updateSeller)

module.exports = route
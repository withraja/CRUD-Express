const route = require("express").Router()
const sellerRoute = require("./seller.route")
const productRoute = require("./product.route")


route.use("/seller", sellerRoute)
route.use("/product", productRoute)

module.exports = route
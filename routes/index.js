const route = require("express").Router()
const sellerRoute = require("./seller.route")

route.use("/seller", sellerRoute)

module.exports = route
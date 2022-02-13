const { Seller } = require('../models')

class SellerController {
    static async getSellers(req, res) {
        const data = await Seller.getSellers()
        res.status(200).json({ data })
    }
    static async getSeller(req, res) {
        const seller_id = req.params.seller_id
        const data = await Seller.getSeller(seller_id)
        res.status(200).json({ data })
    }
    static async createSeller(req, res) {
        const { seller_name, seller_location } = req.body
        const payload = {
            seller_name, seller_location
        }
        const newSeller = await Seller.createSeller(payload)
        res.status(200).json({ data: newSeller })
    }
}

module.exports = SellerController
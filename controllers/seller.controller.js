const { Seller } = require('../models')

class SellerController {
    static async getSellers(req, res) {
        const data = await Seller.getSellers()
        res.status(200).json({ data })
    }

    static async getSeller(req, res) {
        const { seller_id } = req.params
        const data = await Seller.getSeller(seller_id)
        res.status(200).json({ data })
    }

    static async createSeller(req, res) {
        const { seller_name, seller_location } = req.body
        const payload = {
            seller_name, seller_location
        }
        const newSeller = await Seller.createSeller(payload)
        res.status(201).json({ data: newSeller })
    }

    static async updateSeller(req, res) {
        const { seller_id } = req.params
        let payload = {}
        for(let key in req.body) {
            payload[key] = req.body[key]
        }
        const updated = await Seller.updateSeller(payload, seller_id)
        res.status(201).json({ data: updated })
    }

    static async deleteSeller(req, res) {
        const seller_id = req.params.seller_id
        const deleted = await Seller.deleteSeller(seller_id)
        res.status(200).json({ data: deleted})
    }
}

module.exports = SellerController
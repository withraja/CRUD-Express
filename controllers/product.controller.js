const { Product } = require('../models')

class ProductController {
    static async getProducts(req, res) {
        const data = await Product.getProducts()
        res.status(200).json({ data })
    }

    static async getProduct(req, res) {
        const { product_id } = req.params
        const data = await Product.getProduct(product_id)
        res.status(200).json({ data })
    }

    static async createProduct(req, res) {
        const { product_name, product_price } = req.body
        const payload = {
            product_name, product_price
        }
        const newProduct = await Product.createProduct(payload)
        res.status(201).json({ data: newProduct })
    }

    static async updateProduct(req, res) {
        const { product_id } = req.params
        let payload = {}
        for(let key in req.body) {
            payload[key] = req.body[key]
        }
        const updated = await Product.updateProduct(payload, product_id)
        res.status(201).json({ data: updated })
    }

    static async deleteProduct(req, res) {
        const product_id = req.params.product_id
        const deleted = await Product.deleteProduct(product_id)
        res.status(200).json({ data: deleted})
    }
}

module.exports = ProductController
const pool = require('../config/index')

class Product {
    static getProducts = async () => {
        const query = `SELECT * FROM products;`
        const products = await pool.query(query)
        console.log(products)
        return products.rows
    }
    
    static getProduct = async (product_id) => {
        const query = `SELECT * FROM products WHERE product_id = ${product_id};`
        const product = await pool.query(query)
        console.log(product)
        return product.rows[0]
    }

    static createProduct = async (payload) => {
        const { product_name, product_price } = payload
        const query = `INSERT INTO products(
            product_name, product_price)
            VALUES ('${product_name}', '${product_price}')
            RETURNING *;`
        const product = await pool.query(query)
        return product.rows[0]
    }

    static updateProduct = async (payload, product_id) => {
        let query = `
        UPDATE products SET
        `
        const arr = Object.keys(payload)
        for (let i = 0; i < arr.length; i++) {
          if (i === arr.length - 1) {
            query += `${arr[i]}= '${payload[arr[i]]}'`
          } else {
            query += `${arr[i]}= '${payload[arr[i]]}',`
          }
        }
        query += `WHERE product_id=${product_id} RETURNING * ;`
        console.log(query)
        const updated = await pool.query(query)
        return updated.rows[0]
      }

    static deleteProduct = async (product_id) => {
        const query = `DELETE FROM products 
        WHERE product_id = ${product_id}
        RETURNING *;`
        const deleted = await pool.query(query)
        return deleted.rows[0]
    }
}

module.exports = Product
const pool = require('../config/index')

class Seller {
    static getSellers = async () => {
        const query = `SELECT * FROM sellers;`
        const sellers = await pool.query(query)
        console.log(sellers)
        return sellers.rows
    }
    
    static getSeller = async (seller_id) => {
        const query = `SELECT * FROM sellers WHERE seller_id = ${seller_id};`
        const seller = await pool.query(query)
        console.log(seller)
        return seller.rows[0]
    }

    static createSeller = async (payload) => {
        const { seller_name, seller_location } = payload
        const query = `INSERT INTO sellers(
            seller_name, seller_location)
            VALUES ('${seller_name}', '${seller_location}')
            RETURNING *;`
        const seller = await pool.query(query)
        return seller.rows[0]
    }

    static updateSeller = async (payload, seller_id) => {
        let query = `UPDATE sellers SET`
        const arr = Object.keys(payload)
        for (let i = 0; i < array.length; i++) {
            if (i === arr.length - 1) {
                query += `${arr[i]}= '${payload[arr[i]]}'`
            } else {
                query += `${arr[i]}= '${payload[arr[i]]}',`
            }
                }
        query += `WHERE seller_id = ${seller_id}
        RETURNING *;`
        const updated = await pool.query(query)
        return updated.rows[0]
    }

    static deleteSeller = async (seller_id) => {
        const query = `DELETE FROM sellers 
        WHERE seller_id = ${seller_id}
        RETURNING *;`
        const deleted = await pool.query(query)
        return deleted.rows[0]
    }
}

module.exports = Seller
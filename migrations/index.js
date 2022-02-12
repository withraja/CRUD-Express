const pool = require('../config/index')

const migrations = async () => {

    const query_create_sellers = `CREATE TABLE sellers(
    seller_id INT GENERATED ALWAYS AS IDENTITY,
    seller_name VARCHAR(255) NOT NULL,
    seller_location text,
    PRIMARY KEY(seller_id)
 );`
    
    const query_create_products = `CREATE TABLE products(
    product_id INT GENERATED ALWAYS AS IDENTITY,
    seller_id INT,
    product_name VARCHAR(255) NOT NULL,
    product_price INT,
    PRIMARY KEY(product_id),
    CONSTRAINT fk_seller
       FOREIGN KEY(seller_id) 
       REFERENCES sellers(seller_id)
 );`

    try {
        await pool.query(query_create_sellers)
        await pool.query(query_create_products)
    } catch (error) {
        console.log(error)
    }
}

migrations()

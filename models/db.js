import {pool} from '../config/config.js'

const getProducts = async()=>{
    const [results] = await pool.query(`
    SELECT * FROM products 
    `)
    return results
}
const getSingle = async(prodID)=>{
    let [response]= await pool.query(`
    SELECT * FROM products 
    WHERE prodID=?
    `, [prodID])
    return response
}
const postProduct= async(prodName, quantity, amount, category, details, prodUrl)=>{
    let [item] = await pool.query(`
    INSERT INTO products (prodName, quantity, amount, category, details, prodUrl) VALUES (?,?,?,?,?)
    `,[prodName, quantity, amount, category, details, prodUrl])
    return getProducts(item.insertID)
}

export {getProducts,getSingle,postProduct}
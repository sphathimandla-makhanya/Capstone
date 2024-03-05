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
    INSERT INTO products (prodName, quantity, amount, category, details, prodUrl) VALUES (?,?,?,?,?,?)
    `,[prodName, quantity, amount, category, details, prodUrl])
    return getProducts(item.insertID)
}

const editProduct = async(prodName, quantity, amount, category, details, prodUrl, prodID)=>{
    const [product] =await pool.query(`
    UPDATE products
    SET prodName=?, quantity=?, amount=?, category=?, details=?, prodUrl=?
    WHERE (prodID=?)
    `,[prodName, quantity, amount, category, details, prodUrl, prodID])
    return editProduct
}
const deleteProduct = async(prodID)=>{
    const [item] = await pool.query(`
    DELETE FROM products WHERE prodID =?
    `, [prodID])
    return getProducts()
}
//users
const getUsers = async()=>{
    const [results] = await pool.query(`
    SELECT * FROM users 
    `)
    return results
}

const getUser = async(userID)=>{
    let [response]= await pool.query(`
    SELECT * FROM users 
    WHERE userID=?
    `, [userID])
    return response
}

const postUser= async(userID,firstName,lastName,gender,userRole,emailAdd,userPass,userProfile)=>{
    let [newUser] = await pool.query(`
    INSERT INTO products (userID,firstName,lastName,gender,userRole,emailAdd,userPass,userProfile) VALUES (?,?,?,?,?,?,?,?)
    `,[userID,firstName,lastName,gender,userRole,emailAdd,userPass,userProfile])
    return getUsers(item.insertID)
}

export {getProducts,getSingle,postProduct,editProduct, deleteProduct,getUsers, getUser, postUser}
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

const postUser= async(firstName,lastName,gender,userRole,emailAdd,userPass,userProfile)=>{
    let [newUser] = await pool.query(`
    INSERT INTO users (firstName,lastName,gender,userRole,emailAdd,userPass,userProfile) VALUES (?,?,?,?,?,?,?)
    `,[firstName,lastName,gender,userRole,emailAdd,userPass,userProfile])
    return getUsers(newUser.insertID)
}
const editUser = async(firstName,lastName,gender,userRole,emailAdd,userPass,userProfile,userID)=>{
    const [user] =await pool.query(`
    UPDATE users
    SET firstName=?,lastName=?,gender=?,userRole=?,emailAdd=?,userPass=?,userProfile=?
    WHERE (userID=?)
    `,[firstName,lastName,gender,userRole,emailAdd,userPass,userProfile,userID])
    return editUser
}

const deleteUser = async(userID)=>{
    const [item] = await pool.query(`
    DELETE FROM users WHERE userID =?
    `, [userID])
    return getUsers()
}

//cart
const getCartItems = async()=>{
    let [response]= await pool.query(`
    SELECT * FROM cart 
    `)
    return response
}

const getCartItem = async(orderID)=>{
    let [response]= await pool.query(`
    SELECT * FROM cart 
    WHERE orderID=?
    `, [orderID])
    return response
}

const postToCart= async(quantity,userID,prodID)=>{
    let [item] = await pool.query(`
    INSERT INTO cart (quantity,userID, prodID) VALUES (?,?,?)
    `,[quantity,userID,prodID]);
    return getCartItems(item.insertID)
}

const deleteFromCart = async(orderID)=>{
    const [item] = await pool.query(`
    DELETE FROM cart WHERE orderID =?
    `, [orderID])
    return getCartItems()
}

const editCart = async(quantity, userID,prodID, orderID)=>{
    const [cart] =await pool.query(`
    UPDATE cart
    SET quantity=?, userID=?, prodID=?
    WHERE (orderId=?)
    `,[quantity, userID,prodID,orderID])
    return editCart
}


//login
const checkUser =async(emailAdd)=>{
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM users WHERE emailAdd = ?
    `, [emailAdd])
    return userPass
}

//cart




export {getProducts,getSingle,postProduct,editProduct, deleteProduct,getUsers, getUser, postUser,editUser,deleteUser,checkUser, getCartItems,getCartItem , postToCart,deleteFromCart,editCart}
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
    const [product] = await pool.query(`
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

const getAllOrders = async()=>{
    let [response]= await pool.query(`
    SELECT * FROM cart
    JOIN products ON cart.prodID=products.prodID
    `)
    return response
}

const getCartbyUser = async(userID)=>{
    let [response]= await pool.query(`
    SELECT * FROM cart
    JOIN products ON cart.prodID=products.prodID
    WHERE userID=?
    `, [userID])
    return response
}
  
const postToCart= async(cartQuantity,userID,prodID)=>{
    let [item] = await pool.query(`
    INSERT INTO cart (cartQuantity,userID, prodID) VALUES (?,?,?)
    `,[cartQuantity,userID,prodID]);
    return getCartItems(item.insertID)
}

const deleteFromCart = async(orderID)=>{
    const [item] = await pool.query(`
    DELETE FROM cart WHERE orderID =?
    `, [orderID])
    return getCartItems()
}

const editCart = async(cartQuantity, userID,orderID, prodID)=>{
    const [Item] =await pool.query(`
    UPDATE cart
    SET cartQuantity=?, userID=?, orderID=?
    WHERE (prodID=?)
    `,[cartQuantity, userID,orderID,prodID])
    return editCart
}


//login
const checkUser =async(emailAdd)=>{
    const [[{userPass}]]= await pool.query(`
    SELECT  * From users WHERE emailAdd = ?
    `, [emailAdd])
    return userPass
}
// console.log(await checkUser("siya@gmail.com"))

const getUserRole =async(emailAdd)=>{
    const [result] = await pool.query(`
    SELECT * FROM users WHERE emailAdd = ?
    `, [emailAdd])
    return result
}

const clearCart = async(userID) => {
    const [result] = await pool.query(
        'delete from cart where userID = ?;',
        [userID]
    );
}




export {getProducts,getSingle,postProduct,editProduct, deleteProduct,getUsers, getUser,
     postUser,editUser,deleteUser,checkUser, getCartItems,getAllOrders,getCartbyUser , postToCart,
     deleteFromCart,editCart,getUserRole,clearCart} 
import { deleteFromCart, editCart, postToCart,getAllOrders, getCartbyUser} from "../models/db.js";
import jwt from 'jsonwebtoken';
export default{
    // getAllItems: async(req,res)=>{
    //         try{
    //         res.send(await getCartItems())
    // }catch(error){
    //     console.error('error');
    //     res.status(500).json({error:'Internal server error'})
    // }
    // },

    getAllItemsInCart: async(req,res)=>{
            try{
            res.send(await getAllOrders())
    }catch(error){
        console.error('error');
        res.status(500).json({error:'Internal server error'})
    }
    },

  
    addItemToCart: async (req, res) => {
        try {
            const { quantity, prodID } = req.body;
    
            // Extracting user ID from token payload
            const token = req.cookies.jwt; // Assuming token is stored in cookies
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            const userID = decodedToken.userRole[0].userID;
    
            // Now you have the userID, you can proceed with your logic
            // For example, you can use userID to associate the item with the user in the cart
    
            const cartItems = await getCartbyUser(userID); // Pass the userID to getCartbyUser
            const existingItem = cartItems.find(item => item.prodID === prodID);
            if (existingItem) {
                await editCart(existingItem.orderID, existingItem.quantity + quantity);
            } else {
                await postToCart(quantity, userID, prodID);
            }
            // Get the cart items with product details
            const cartWithProducts = await getCartbyUser(userID);
            res.send(cartWithProducts);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getOrdersByUser: async (req, res) => {
        try {
            // Extracting user ID from token payload
            const token = req.cookies.jwt;
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            const userID = decodedToken.userRole[0].userID;

            // Fetch cart items for the authenticated user
            const cartWithProducts = await getCartbyUser(userID);
            res.send(cartWithProducts);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    
    removeCartItem: async (req, res)=>{
        try{
            await deleteFromCart(req.params.prodID)
            res.json(await getCartbyUser())
        }catch(error){
            console.log(error)
            res.status(500).json({error:"Internal server error"})
        }
    }
    // updateCart: async (req, res)=>{
    //     try{
    //         const [cart] = await getCartbyUser(req.user.userID)
    //         let {quantity, userID, prodID} = req.body
    //         quantity ? quantity=quantity : {quantity}=cart
    //         prodID ? prodID=prodID : {prodID}=cart
    //         await editCart(quantity,userID,prodID, +req.user.userID)
    //         res.json(await getCartbyUser(userID))
    //     }catch(error){
    //         console.log(error)
    //         res.status(500).json({error:'Internal server error'})
    //     }
    // }
}


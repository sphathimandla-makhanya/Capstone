import { deleteFromCart, editCart, getCartItems, postToCart, getCartbyUser} from "../models/db.js";
import jwt from 'jsonwebtoken';
export default{
        getAllItems: async(req,res)=>{
            try{
            res.send(await getCartItems())
    }catch(error){
        console.error('error');
        res.status(500).json({error:'Internal server error'})
    }
    },

    getSingleItem: async (req,res)=>{
        try{
            res.send(await getCartItem(+req.params.orderID))
        }catch(error){
            console.log(error)
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

    getOrdersByUser: async (req,res)=>{
        const userID=decodedToken.userRole[0].userID
        const result = res.send(await getCartbyUser(userID))
        res.json(result)
    },
    
    removeCartItem: async (req, res)=>{
        try{
            await deleteFromCart(req.params.orderID)
            res.json(await getCartItems())
        }catch(error){
            console.log(error)
            res.status(500).json({error:"Internal server error"})
        }
    },
    updateCart: async (req, res)=>{
        try{
            const [cart] = await getCartItem(+req.params.orderID)
            let {quantity, userID, prodID} = req.body
            quantity ? quantity=quantity : {quantity}=cart
            userID ? userID=userID : {userID}=cart
            prodID ? prodID=prodID : {prodID}=cart
            await editCart(quantity,userID,prodID, +req.params.orderID)
            res.json(await getCartItem())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }
}


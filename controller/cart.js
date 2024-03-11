import { deleteFromCart, editCart, getCartItems,getCartItem, postToCart} from "../models/db.js";

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

    addItemToCard: async (req,res)=>{
        try{
            const {quantity,userID,prodID} = req.body
            const post =  await  postToCart(quantity,userID,prodID)
            res.send(await getCartItems())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
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
            res.json(await getCartItems())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }
}


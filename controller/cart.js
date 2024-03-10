import { getCartItems, postToCart} from "../models/db.js";

export default{
        getAllItems: async(req,res)=>{
            try{
            res.send(await getCartItems())
    }catch(error){
        console.error('error');
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
}


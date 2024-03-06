import { getCartItems} from "../models/db.js";

export default{
        getAllItems: async(req,res)=>{
            try{
            res.send(await getCartItems())
    }catch(error){
        console.error('error');
        res.status(500).json({error:'Internal server error'})
    }
    }
}


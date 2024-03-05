import { getProducts, getSingle} from "../models/db.js";

export default{
    getALL: async(req,res)=>{
        res.send(await getProducts())
    },
    getSingle: async (req,res)=>{
        try{
            res.send(await getSingle(+req.params.prodID))
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    addProduct: async (req,res)=>{
        try{
            const {prodName, quantity, amount, category, details, prodUrl} = req.body
            const post =  await postProduct(prodName, quantity, amount, category, details, prodUrl)
            res.send(await getProducts())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }
}
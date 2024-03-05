import { getProducts, getSingle, postProduct, editProduct, deleteProduct} from "../models/db.js";

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
    },

    updateProduct: async (req, res)=>{
        try{
            const [product] = await getSingle(+req.params.prodID)
            let {prodName, quantity, amount, category, details, prodUrl} = req.body
            prodName ? prodName=prodName : {prodName}=product
            quantity ? quantity=quantity : {quantity}=product
            amount ? amount=amount : {amount}=product
            category ? category=category : {category}=product
            details ? details=details : {details}=product
            prodUrl ? prodUrl=prodUrl : {prodUrl}=product
            await editProduct(prodName, quantity, amount, category, details, prodUrl, +req.params.prodID)
            res.json(await getProducts())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    removeProduct: async (req, res)=>{
        try{
            await deleteProduct(req.params.prodID)
            res.json(await getProducts())
        }catch{
            console.log(error)
            res.status(500).json({error:"Internal server error"})
        }
    }
}
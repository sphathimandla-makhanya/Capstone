import express from "express";
import controller from '../controller/products.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getALL )
        .post(controller.addProduct)
        
router
    .route('/:prodID')
        .get(controller.getSingle)
        .patch(controller.updateProduct)
        .delete(controller.removeProduct)

export default router
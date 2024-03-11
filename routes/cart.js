import express from "express";
import controller from '../controller/cart.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAllItems)
        .post(controller.addItemToCard)

router
    .route('/:orderID')
        .get(controller.getSingleItem)
        .delete(controller.removeCartItem)
        .patch(controller.updateCart)
        
 export default router
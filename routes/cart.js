import express from "express";
import controller from '../controller/cart.js'
import {authenticate} from '../middleware/middelware.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAllItemsInCart)
        .post(authenticate,controller.addItemToCart)

router
    .route('/:prodID')
        .delete(controller.removeCartItem)
        .patch(controller.updateCart)
        
        

router
    .route('/user')
        .get(authenticate, controller.getOrdersByUser)

router
    .route('/delete/:userId')
        .delete(controller.delAllCart)

 export default router
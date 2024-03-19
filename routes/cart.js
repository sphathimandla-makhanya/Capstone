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
        

router
    .route('/user')
        .get(authenticate, controller.getOrdersByUser)



 export default router
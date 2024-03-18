import express from "express";
import controller from '../controller/cart.js'
import {authenticate} from '../middleware/middelware.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAllItems)
        .post(authenticate,controller.addItemToCart)

router
    .route('/:orderID')
        .get(controller.getSingleItem)
        .delete(controller.removeCartItem)
        .patch(controller.updateCart)
        

router
        .route('/user')
            .get(authenticate, controller.getOrdersByUser)
 export default router
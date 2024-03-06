import express from "express";
import controller from '../controller/cart.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAllItems)

 export default router
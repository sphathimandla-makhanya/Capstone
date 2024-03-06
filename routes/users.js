import express from "express";
import controller from '../controller/users.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAll)
        .post(controller.addUser)

router
    .route('/:userID')
        .get(controller.getSingle)
        .patch(controller.updateUser)

export default router
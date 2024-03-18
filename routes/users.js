import express from "express";
import controller from '../controller/users.js';
import {authenticate} from '../middleware/middelware.js'
const router = express.Router()

router
    .route('/')
        .get(controller.getAll)
        .post(controller.addUser)

router
    .route('/:userID')
        .get(authenticate,controller.getSingle)
        .patch(controller.updateUser)
        .delete(controller.removeUser)
export default router
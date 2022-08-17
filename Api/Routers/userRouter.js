import express from 'express'
import {userController} from '../Controllers/index.js'
import { tokenService } from '../Services/index.js';

const userRouter = () => {
    var userRoute = express.Router();
    
    userRoute.route('/').put(userController.login);
    userRoute.route('/').post(userController.register);
    userRoute.route('/me').get(tokenService.authenticateToken, userController.getMe);
    userRoute.route('/').delete(tokenService.authenticateToken, userController.disable);
    userRoute.route('/:userUuid/').put(tokenService.authenticateToken, userController.edit);
    userRoute.route('/:userUuid/password').put(tokenService.authenticateToken, userController.editPassword);

    return (userRoute);
}

export default (userRouter)()
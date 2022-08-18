import express from 'express'
import {certificateController} from '../Controllers/index.js'
import { tokenService } from '../Services/index.js';

const certificateRouter = () => {
    var certificateRoute = express.Router();
    
    certificateRoute.route('/').post(tokenService.authenticateToken, certificateController.addCertificate);
    certificateRoute.route('/').get(tokenService.authenticateToken, certificateController.getCertificate);
    certificateRoute.route('/').delete(tokenService.authenticateToken, certificateController.disableCertificate);

    return (certificateRoute);
}

export default (certificateRouter)()
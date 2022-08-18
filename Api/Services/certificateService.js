import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path';
import {errorService} from './index.js'

dotenv.config();
let __dirname = path.resolve();

const addCertificate = async (user, data) => {
    try {
        if (!fs.existsSync("../Stockage/" + user.userUuid + "/")){
            fs.mkdirSync("../Stockage/" + user.userUuid + "/", {recursive: true});
        }
    } catch (err) {
        throw new errorService.CustomException('Error with fileSystems', 401);
    }
    data.file.mv(__dirname + "/../Stockage/" + user.userUuid + "/" + data.file.name);
    return ("File Upload")
}

const getCertificate = (user, userUuid) => {

}

const disableCertificate = (user, certificateUuid) => {

}

export {addCertificate, getCertificate, disableCertificate}
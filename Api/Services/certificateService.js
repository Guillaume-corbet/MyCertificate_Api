import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path';
import db from './dbService.js'
import {errorService} from './index.js'
import {v4} from 'uuid'
import { Certificates } from '../Models/index.js';
import _ from 'lodash'

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
    let createdCertif = (await db.Certificates.create(
        {
            uuid: v4(),
            owner: user.userUuid,
            name: data.file.name,
            public: true,
            enable: true
        }
    )).get(
        {
            plain:true
        }
    );
    if (!createdCertif) {
        throw new errorService.CustomException('Error adding database', 401);
    }
    return ("File Upload")
}

const editCertificate = (user, certificateUuid) => {

}

const getCertificate = async (user, userUuid) => {
    let res = await db.Certificates.findAll(
        {
            where: {
                owner: userUuid,
                enable: true
            },
            attributes: Certificates.attribute.all,
            raw: true,
            
        }
    )
    if (!res) {
        throw new errorService.CustomException('Error database', 401);
    }
    if (user.userUuid != userUuid) {
        res.forEach(element => {
            if (!element.public)
                res = _.without(res, element);
        });
    }
    return ({files: res});
}

const disableCertificate = (user, certificateUuid) => {

}

export {addCertificate, editCertificate, getCertificate, disableCertificate}
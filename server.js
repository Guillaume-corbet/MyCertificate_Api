import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import {
    certificateRouter,
    userRouter
} from './Api/Routers/index.js'
import {dbService, mailService, mailTemplateService} from './Api/Services/index.js'

var server = express();
dotenv.config();

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MyCertificate_Api",
            version: "0.1.0",
            tags: [
                {
                    name: "User"
                }
            ]
        }
    },
    apis: ["./Dev/RoutersDoc/*/*.js"]
}

const swaggerDocs = await swaggerJsDoc((swaggerOptions));

server.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
server.use(cors());
server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

try {
    await dbService.sequelize.authenticate();
    await dbService.sequelize.sync();
} catch (error) {
    console.log("error = ", error);
}

mailService.initSmtp();
mailTemplateService.initTemplate(process.env.PATH_TEMPLATE_MAIL);

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use('/v1/user/', userRouter);
server.use('/v1/certificate/', certificateRouter);


server.use(redirectUnmatched);

function redirectUnmatched(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({error: "Bad url or request type"}));
};

server.listen(process.env.PORT, function() {
    console.log("Server listening port " + process.env.PORT);
});
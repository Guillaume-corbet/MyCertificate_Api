import Seq from 'sequelize'
import dotenv from 'dotenv'
import {
    Users,
} from '../Models/index.js'

dotenv.config();

// Sequelize init
const db = {};

db.Sequelize = Seq.Sequilize;
if (process.env.NODE_ENV == "production"){
    db.sequelize = new Seq.Sequelize(
        process.env.DB_PROD_NAME,
        process.env.DB_PROD_USER,
        process.env.DB_PROD_PASSWD, {
            host: process.env.DB_PROD_HOST,
            dialect: 'mysql'
        }
    );
}
else{
    db.sequelize = new Seq.Sequelize(
        process.env.DB_DEV_NAME,
        process.env.DB_DEV_USER,
        process.env.DB_DEV_PASSWD, {
            host: process.env.DB_DEV_HOST,
            dialect: 'mysql'
        }
    );
}

db.Users = Users.model(db.sequelize, Seq.DataTypes);

/* FOREIGN KEYS */



export default db;
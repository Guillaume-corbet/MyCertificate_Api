import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import {errorService, dbService} from './index.js'
import {Users, UserType} from '../Models/index.js'
import {v4} from 'uuid'

dotenv.config();

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const passwd = await bcrypt.hash(password, salt);
    return passwd;
}

const login = async (body) => {
    try {
        let user = await dbService.Users.findOne(
            {
                where: {
                    username: body.username
                },
                attributes: Users.attribute.all,
            }
        );
        if (!user) {
            throw new errorService.CustomException('User or password is incorrect', 401);
        }
        // Compare password
        let valid = await bcrypt.compare(body.password, user.password);
        if (!valid) {
            throw new errorService.CustomException('User or password is incorrect', 401);
        }
        //let {password, ...loguser} = user;
        return ({
            user: user,
            token: jwt.sign(
                {
                    userUuid: user.uuid
                },
                process.env.RANDOM_STRING,
                { expiresIn: 3600 }
            )
        });
    } catch (e) {
        console.log(e);
        throw new errorService.CustomException(e.message, e.code);
    }
}

const disable = async (user, uuid) => {
    let res = await dbService.Users.update(
        {
            enable: false
        },
        {
            where: 
            {
                uuid: uuid
            }
        }
    );
    return ("User disable");
}

const register = async (body) => {
    try {
        let checkUsername = await dbService.Users.findOne(
            {
                where: {
                    username: body.username
                },
                attributes: Users.attribute.all
            }
        )
        if (checkUsername) {
            throw new errorService.CustomException('Username already exists', 401);
        }
        let checkEmail = await dbService.Users.findOne(
            {
                where: {
                    email: body.email
                },
                attributes: Users.attribute.all
            }
        )
        if (checkEmail) {
            throw new errorService.CustomException('Email already exist', 401);
        }
        else if (body.username && body.password && body.email) {
            if (body.email.indexOf("@") <= 0) {
                throw new errorService.CustomException('Invalid email', 401);
            } else if (body.password.length < 8) {
                throw new errorService.CustomException('Invalid password', 401);
            } else {
                let hashed_pw = await hashPassword(body.password);
                let created_user = await dbService.Users.create(
                    {
                        uuid: v4(),
                        username: body.username,
                        email: body.email,
                        password: hashed_pw,
                        enable: true
                    }
                );
                if (!created_user) {
                    throw new errorService.CustomException('Error created user', 401);
                }
                return ("User Created");
            }
        }
        else {
            throw new errorService.CustomException('Field missing', 401);
        }
    } catch (e) {
        throw new errorService.CustomException(e.message, e.code);
    }
}

const getOne = async (user, userUuid) => {
    try {
        let userDb;
        if (user.userUuid == userUuid) {
            userDb = await dbService.Users.findOne(
                {
                    where: {
                        uuid: userUuid
                    },
                    attributes: Users.attribute.protected,
                }
            );
        }
        if (!userDb) {
            throw new errorService.CustomException('User not found', 401);
        }
        return ({user: userDb});
    } catch (e) {
        throw new errorService.CustomException(e.message, e.code);
    }
}

const edit = async (user, uuid, data) => {
    let user = await getOne(user, uuid);
    let res = await dbService.Users.update(
        {
            username: data.username != undefined ? data.username : user.username,
            email: data.email != undefined ? data.email : user.email,
        },
        {
            where: 
            {
                uuid: uuid
            }
        }
    );
    return ("User disable");
}

const editPassword = async (user, uuid, data) => {
    return ("Password changed");
}

export {login, disable, register, getOne, edit, editPassword}
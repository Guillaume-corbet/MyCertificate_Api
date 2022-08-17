import {userService} from '../Services/index.js'

const login = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await userService.login(req.body);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const register = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await userService.register(req.body);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const getMe = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await userService.getOne(req.user, req.user.userUuid);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const disable = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await userService.disable(req.user, req.params.userUuid);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const edit = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await userService.edit(req.user, req.params.userUuid, req.body);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const editPassword = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await userService.editPassword(req.user, req.params.userUuid, req.body);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

export {login, register, getMe, disable, edit, editPassword}
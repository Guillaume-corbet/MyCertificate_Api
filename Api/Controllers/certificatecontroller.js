import {certicateService} from '../Services/index.js'

const addCertificate = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await certicateService.addCertificate(req.user);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const getCertificate = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await certicateService.getCertificate(req.user);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

const disableCertificate = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let resultat = await certicateService.disableCertificate(req.user);
        res.status(201).send(JSON.stringify(resultat));
    } catch (e) {
        res.status(e.code ? e.code : 401).send(JSON.stringify({error: e.message}));
    }
}

export {addCertificate, getCertificate, disableCertificate}
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

// Used to generate a token for user validation after creation

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['token']
    const token = authHeader?.split(' ')[1]

    if (token == null) {
        res.setHeader('Content-Type', 'application/json');
        res.status(401).send(JSON.stringify({error: "You are not authenticate"}));
        return;
    }
    jwt.verify(token, process.env.RANDOM_STRING, async (err, user) => {
        if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.status(403).send(JSON.stringify({error: "Token invalid"}));
            return;
        }
        req.user = user;
        next();
    });
}

export {authenticateToken}
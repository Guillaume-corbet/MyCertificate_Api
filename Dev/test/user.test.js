import assert from 'assert';
import {userService, dbService} from '../../Api/Services/index.js'

describe('User service', () => {
    before(async () => {
        try {
            await dbService.sequelize.authenticate();
            await dbService.sequelize.sync();
        } catch (error) {
            console.log("error = ", error);
        }
    })
    describe('register', () => {
        it('user exist', async () => {
            let body = {email: "existe5@gmail.com", password: "password", firstname: "guillaume", name: "corbet"};
            let result = await userService.register(body, null);
            assert.strictEqual(result.status, 401);
        });
        it('invalid Email', async () => {
            let body = {email: "jexistepasgmail.com", password: "password", firstname: "guillaume", name: "corbet"};
            let result = await userService.register(body, null);
            assert.strictEqual(result.status, 401);
        });
        it('min charac password', async () => {
            let body = {email: "jexistepas@gmail.com", password: "pass", firstname: "guillaume", name: "corbet"};
            let result = await userService.register(body, null);
            assert.strictEqual(result.status, 401);
        });
    })
    describe('login', () => {
        it('bad email', async () => {
            let body = {email: "jexistepas@gmail.com", password: "password"};
            let result = await userService.login(body);
            assert.strictEqual(result.status, 401);
        });
        it('bad password', async () => {
            let body = {email: "guillaume.corbet@epitech.eu", password: "mauvais"};
            let result = await  userService.login(body);
            assert.strictEqual(result.status, 401);
        });
        it('good login', async () => {
            let body = {email: "existe5@gmail.com", password: "password"};
            let result = await userService.login(body);
            assert.strictEqual(result.status, 200);
        });
    })
});
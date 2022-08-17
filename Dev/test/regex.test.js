import assert from 'assert';
import {regexService} from '../Services/index.js'

describe('regex service test', () => {
    describe('email', () => {
        it('Bad email', () => {
            let result = regexService.verifEmail("guillaume.corbet@epitech");
            assert.strictEqual(result.isFind, false);
        });
        it('good email', () => {
            let result = regexService.verifEmail("guillaume.corbet@epitech.eu");
            assert.strictEqual(result.isFind, true);
        });
    });
    describe('password', () => {
        it('bad password', () => {
            let result = regexService.verifPassword("guillaume");
            assert.strictEqual(result.isFind, false);
        });
        it('good password', () => {
            let result = regexService.verifPassword("Guillaume42@");
            assert.strictEqual(result.isFind, true);
        });
    })
});
import assert from 'assert';
import {mailService, mailTemplateService} from '../Services/index.js'

describe('mail service test', () => {
    before(() => {
        mailService.initSmtp();
        mailTemplateService.initTemplate("Template/Mail/");
    })
    it('send exist inscription', async () => {
        let result = await mailService.sendNewMail("guillaume.corbet@epitech.eu", "super test", "", mailTemplateService.getInscription());
        assert.strictEqual(result.response.substr(0, 3), '250');
    });
    it('send exist password', async () => {
        let result = await mailService.sendNewMail("guillaume.corbet@epitech.eu", "super test", "", mailTemplateService.getForgetPassword());
        assert.strictEqual(result.response.substr(0, 3), '250');
    });
});
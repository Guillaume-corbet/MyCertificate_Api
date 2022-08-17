import fs from 'fs'

let inscription = "";
let forgetPassword = "";

const initTemplate = (path) => {
    inscription = fs.readFileSync(path + 'inscription.html',{encoding:'utf8', flag:'r'});
    forgetPassword = fs.readFileSync(path + 'forgetPassword.html', {encoding:'utf8', flag:'r'});
}

const getInscription = () => {
    return (inscription);
}

const getForgetPassword = () => {
    return (forgetPassword);
}

export {initTemplate, getInscription, getForgetPassword}
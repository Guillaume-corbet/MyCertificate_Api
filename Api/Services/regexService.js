const regexValidator = (regex, data) => {
    let result = {value: [], isFind: false};
    result.value = data.match(regex)
    if (result.value != null)
        result.isFind = true;
    return (result);
}

const verifEmail = (data) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (regexValidator(regex, data));
}

const verifPassword = (data) => {
    let regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return (regexValidator(regex, data));
}

export {verifEmail, verifPassword}
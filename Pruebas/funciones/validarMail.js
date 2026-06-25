function validarMail(mail) {
    if (mail === null || mail === undefined) {
        return false;
    }

    if (typeof mail !== 'string' || mail.trim() === '' || !mail.includes('@')) {
        return false;
    }

    return true;
}

module.exports = { validarMail };
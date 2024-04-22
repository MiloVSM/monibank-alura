// Valida se o usuário é maior de idade
const verifyAge = (field) => {
    const birthDate = new Date(field.value);
    if (!isAdult(birthDate)) {
        field.setCustomValidity(True);
    }
}

const isAdult = (date) => {
    const currentDate = new Date();
    const adultAge = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= adultAge;
}

export {
    verifyAge
}
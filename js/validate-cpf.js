// Aplica uma máscara de formatação ao campo de CPF (###.###.###-##)
const cpfFormat = (e, field, inputLength) => {
    if (e.inputType == "insertFromPaste" && inputLength >= 11) {
        const cleanedValue = field.value.replace(/\D/g, '');
        field.value = cleanedValue.slice(0, 3) + "." + cleanedValue.slice(3, 6) + "." + cleanedValue.slice(6, 9) + "-" + cleanedValue.slice(9);
    }
    if (e.inputType == "insertText" && (inputLength === 3 || inputLength === 7)) {
        field.value += ".";
    } else if (e.inputType == "insertText" && inputLength === 11) {
        field.value += "-";
    }
}

// Verifica se o cpf inserido cumpre com todas as validações
const cpfIsValid = (field) => {
    const cpf = field.value.replace(/\.|-/g, "");

    if (checkNumberRepetition(cpf) || checkFirstDigit(cpf) || checkSecondDigit(cpf)) {
        field.setCustomValidity('CPF invalido');
    }
}

// Verifica se o cpf inserido não é apenas o mesmo número repetido
const checkNumberRepetition = (cpf) => {
    const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    
    return repeatedNumbers.includes(cpf);
}

// Cálculo para verificar se o primeiro digito verificardor do CPF é válido
const checkFirstDigit = (cpf) => {
    let sum = 0;
    let multiplier = 10;

    for (let index = 0; index < 9; index++) {
        sum += cpf[index] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[9];
} 

// Cálculo para verificar se o segundo digito verificador do CPF é válido
const checkSecondDigit = (cpf) => {
    let sum = 0;
    let multiplier = 11;

    for (let index = 0; index < 10; index++) {
        sum += cpf[index] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[10];
} 



export {
    cpfFormat,
    cpfIsValid
}
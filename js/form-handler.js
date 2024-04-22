const formErrorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const errorMessages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
};

// Salva o cadastro em local storage (PROVISORIO)
const formHandler = async (e) => {
    const answerList = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    await localStorage.setItem("cadastro", JSON.stringify(answerList));
    window.location.href = "../pages/abrir-conta-form-2.html";
}

const errorHandler = (field) => {
    let errMessage = "";
    
    formErrorTypes.forEach(error => {
        if (field.validity[error]) {
            errMessage = errorMessages[field.name][error];
            console.log(errMessage);
        }   
    })

    const errorElement = field.parentNode.querySelector('.mensagem-erro');
    const inputValidity = field.checkValidity();

    if (!inputValidity) {
        errorElement.textContent = errMessage;
    } else {
        errorElement.textContent = "";
    }
}

export {
    formHandler, errorHandler
}
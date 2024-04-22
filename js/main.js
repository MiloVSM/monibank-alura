import { cpfFormat, cpfIsValid } from "./validate-cpf.js";
import { verifyAge } from "./validate-age.js";
import { formHandler, errorHandler } from "./form-handler.js"

//Guarda os campos obrigatórios e o elemento do formulário em uma variável
const formFields = document.querySelectorAll("[required]");
const form = document.querySelector("[data-formulario]");

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    formHandler(e);
});

formFields.forEach(field => {

    field.addEventListener("blur", () => verifyField(field));
    field.addEventListener("invalid", e => e.preventDefault());

    if (field.name == "cpf") {
        field.addEventListener("input", (e) => {
            let inputLength = field.value.length;
            cpfFormat(e,field,inputLength)
        });
    }
});

const verifyField = (field) => {
    if (field.name == "cpf" && field.value.length >= 11) {
        cpfIsValid(field);
    }
    if (field.name == "aniversario" && field.value) {
        verifyAge(field);
    }

    errorHandler(field);
    field.setCustomValidity('');
}
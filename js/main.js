import { cpfFormat } from "./validate-cpf.js";
import { cpfIsValid } from "./validate-cpf.js"
import { verifyAge } from "./validate-age.js";

//Guarda os campos obrigatórios do formulário em uma variável
const formFields = document.querySelectorAll("[required]"); 

formFields.forEach(field => {

    field.addEventListener("blur", () => verifyField(field));

    if (field.id == "cpf") {
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
}
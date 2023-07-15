//importa a função de um outro arquivo
import eUmCPF from "./valida-cpf.js";
import eMaiorDeIdade from "./valida-idade.js";

// Procura todos os inputs que recebem "required"
const camposDeFormulario = document.querySelectorAll("[required]")

console.log(camposDeFormulario);

// para cada campo com "required" chama a função verificaCampo
camposDeFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

// Depois de percorrer o formulário trazendo if statements 
function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        eUmCPF(campo);
    };

    if (campo.name == "aniversario" && campo.value != "") {
        eMaiorDeIdade(campo)
    }
};
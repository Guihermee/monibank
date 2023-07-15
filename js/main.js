// Importanto as funções de outros arquivos
import eUmCPF from "./valida-cpf.js";
import eMaiorDeIdade from "./valida-idade.js";

// Selecionando os campos do formulário tem "required"
const camposDoFormulario = document.querySelectorAll('[required]')

// Selecionando o elemento Formulário do HTML
const formulario = document.querySelector('[data-formulario]');

// Listener para quando usuário submiter o formulario ser enviado para localStorage
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capturando os dados do usuário em um array
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    // Enviando dados capturados para o localStorage em JSON
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    // Mudando de página
    window.location.href = "../pages/abrir-conta-form-2.html";
})

// Adicionando listener para a validação
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

// Array contendo os tipos de erros possíveis
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

// Array com as mensagens de erro para cada campo
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "O campo do nome não tem caractéres suficientes."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "O campo do email não tem caractéres suficientes."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        // patternMismatch: "Por favor, preencha um CPF válido.",
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
}


// Função para vericação de cada campo de Formulário
function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        eUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        eMaiorDeIdade(campo);
    }

    // Verifica os tipos de erros 
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(erro);
            console.log(mensagem);
            console.log(campo.validity[erro]);

        }
    })

    // Selecionando os elementos "span"
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    // Exibe a mensagem de erro no span
    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

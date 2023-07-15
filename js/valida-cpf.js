// Exporta uma função para poder usar em outros arquivos.
// Função para tirar os pontos e outros caracteres entre os números
export default function eUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");

    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundaDigito(cpf)) {
        console.log("Esse CPF não existe");
    } else {
        console.log("Esse CPF existe");
    }
};

// Função para verificar se o CPF digitado pelo usuário é igual aos da lista.
function validaNumerosRepetidos(cpf) {
    const numeroRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return numeroRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundaDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}


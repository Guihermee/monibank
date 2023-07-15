export default function eMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);

    console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    console.log(dataAtual);
    console.log(dataMais18);

    return dataAtual >= dataMais18;
}


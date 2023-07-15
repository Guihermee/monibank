const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagens = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");


let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarCamera = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false});

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarCamera;
});

botaoTirarFoto.addEventListener("click", () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagens.style.display = "block";
})

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistente = localStorage.getItem("cadastro");
    const converteImagem = JSON.parse(receberDadosExistente);
    
    converteImagem.imagem = imagemURL;

    localStorage.setItem("cadastro", JSON.stringify(converteImagem));

    window.location.href = "./abrir-conta-form-3.html"
})
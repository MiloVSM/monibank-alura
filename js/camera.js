const startCameraBtn = document.querySelector("[data-video-botao]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const capturePhotoBtn = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const messageElement = document.querySelector("[data-mensagem]");
const saveImageBtn = document.querySelector("[data-enviar]");

let imageURL = "";


// Simula reconhecimento facial utilizando a camera do usuário para capturar imagens

startCameraBtn.addEventListener("click", async () => {
    const startVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false });
    
    startCameraBtn.style.display = "none";
    cameraField.style.display = "block";

    video.srcObject = startVideo;
});


capturePhotoBtn.addEventListener("click", () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL("image/jpeg");

    cameraField.style.display = "none";
    messageElement.style.display = "block";
})

saveImageBtn.addEventListener("click", () => {
    const receiveData = localStorage.getItem("cadastro");
    const convertedData = JSON.parse(receiveData);

    convertedData.imagem = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(convertedData));

    window.location.href = "../pages/abrir-conta-form-3.html";
})
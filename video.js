//Para conectar al id video 
const video = document.getElementById('video');
//Para hacer promesas en paralelo
Promise.all([
    //Detector de rostro
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    //reconoce boca ojos nariz
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    //Box face
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    //Estados emocionales
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startVideo)

//Para conectar la camara al video tag
function startVideo () {
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}



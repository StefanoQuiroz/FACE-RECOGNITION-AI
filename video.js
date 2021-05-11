//Para conectar al id video 
const video = document.getElementById('video');

//Para conectar la camara al video tag
const startVideo = () => {
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

//startVideo()

//Mas code
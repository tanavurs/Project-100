var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult = function(event) {
    console.log(event)

    var container = event.results[0][0].transcript

    document.getElementById("textbox").innerHTML=container;

    if(container=="Take my selfie.") {
        speak()
}
}
function speak() {
    var synth = window.speechSynthesis
    dialogue = "Taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(dialogue)
    synth.speak(utterthis)

    Webcam.attach(camera)
}

camera = document.getElementById("camera")
Webcam.set({
    height:250,
    width:360,
    image_format:'jpeg',
    jpeg_quality:90

})

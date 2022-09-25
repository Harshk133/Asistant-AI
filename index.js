console.log("please don't say me boss its harsh");
const body = document.getElementById('body');
const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("Speech Recognition Started!")
};

recognition.onresult = function(event){
    console.log(event);

    const spokenwords = event.results[0][0].transcript;
    console.log("The Words are ", spokenwords);
    // document.write(spokenwords);
    // body.style.color = spokenwords;
    computerSpeech(spokenwords);
};

function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 0.7;

    determineWords(speech, words);
    
    window.speechSynthesis.speak(speech);
}

function determineWords(speech, words){
    if(words.includes("wake up computer")){
        speech.text = "I am online";
    }
    
    if(words.includes("open")){
        speech.text = "Yes boss!";
        window.open("https://github.com/");
    }
    // else{
    //     speech.text = "Boss I am going offline.";
    // }
}

button.addEventListener('click', ()=>{
    recognition.start();
});
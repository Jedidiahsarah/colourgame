let blue = document.querySelectorAll(".blue");
let red = document.querySelectorAll(".red");
let yellow = document.querySelectorAll(".yellow");
let green = document.querySelectorAll(".green");
let black = document.querySelectorAll(".black");
let level1 = document.querySelector(".level1");
let levelcomplete = document.querySelector(".levelcomplete");
let replay = document.querySelector("#replay");
let count = 0;

blue.forEach( function(e){
    e.addEventListener('click', function func (){
        e.style.display ="none"; 
        count++;  
        
        if (window.speechSynthesis.getVoices().length == 0) {
            window.speechSynthesis.addEventListener("voiceschanged", function () {
              textToSpeech();
            });
          } else {
            // languages list available, no need to wait
            textToSpeech();
          }
          function textToSpeech() {
            // get all voices that browser offers
            var available_voices = window.speechSynthesis.getVoices();
    
            // this will hold an english voice
            var english_voice = "";
    
            // find voice by language locale "en-US"
            // if not then select the first voice
            for (var i = 0; i < available_voices.length; i++) {
              if (available_voices[i].lang === "en-US") {
                english_voice = available_voices[i];
                break;
              }
            }
            if (english_voice === "") english_voice = available_voices[0];
    
            // new SpeechSynthesisUtterance object
            var utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.2;
            utter.text = "correct!"
            utter.voice = english_voice;
    
            
            window.speechSynthesis.speak(utter);
            if(count == blue.length){
                clap.play();
                utter.text = "Good job" + window.localStorage.getItem("name", name) + "You removed all colour blue";
                level1.style.display = "none";
                level1.style.display = "none";
                levelcomplete.style.display = "flex";

            }
           
          }

        
    })
});
replay.addEventListener('click', function(){
    window.location.reload();
})

red.forEach( function(e){
    e.addEventListener('click', function func (){
        if (window.speechSynthesis.getVoices().length == 0) {
            window.speechSynthesis.addEventListener("voiceschanged", function () {
              textToSpeech();
            });
          } else {
            // languages list available, no need to wait
            textToSpeech();
          }
          function textToSpeech() {
            // get all voices that browser offers
            var available_voices = window.speechSynthesis.getVoices();
    
            // this will hold an english voice
            var english_voice = "";
    
            // find voice by language locale "en-US"
            // if not then select the first voice
            for (var i = 0; i < available_voices.length; i++) {
              if (available_voices[i].lang === "en-US") {
                english_voice = available_voices[i];
                break;
              }
            }
            if (english_voice === "") english_voice = available_voices[0];
    
            // new SpeechSynthesisUtterance object
            var utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.2;
            utter.text = "Oh no" + window.localStorage.getItem("name", name) + "This is colour red";
            utter.voice = english_voice;
    
            
            window.speechSynthesis.speak(utter);
          }
        
    })
});
yellow.forEach( function(e){
    e.addEventListener('click', function func (){
       if (window.speechSynthesis.getVoices().length == 0) {
            window.speechSynthesis.addEventListener("voiceschanged", function () {
              textToSpeech();
            });
          } else {
            // languages list available, no need to wait
            textToSpeech();
          }
          function textToSpeech() {
            // get all voices that browser offers
            var available_voices = window.speechSynthesis.getVoices();
    
            // this will hold an english voice
            var english_voice = "";
    
            // find voice by language locale "en-US"
            // if not then select the first voice
            for (var i = 0; i < available_voices.length; i++) {
              if (available_voices[i].lang === "en-US") {
                english_voice = available_voices[i];
                break;
              }
            }
            if (english_voice === "") english_voice = available_voices[0];
    
            // new SpeechSynthesisUtterance object
            var utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.2;
            utter.text = "Oh no" + window.localStorage.getItem("name", name) + "This is colour yellow";
            utter.voice = english_voice;
    
            
            window.speechSynthesis.speak(utter);
          }
        
    })
});
green.forEach( function(e){
    e.addEventListener('click', function func (){
       if (window.speechSynthesis.getVoices().length == 0) {
            window.speechSynthesis.addEventListener("voiceschanged", function () {
              textToSpeech();
            });
          } else {
            // languages list available, no need to wait
            textToSpeech();
          }
          function textToSpeech() {
            // get all voices that browser offers
            var available_voices = window.speechSynthesis.getVoices();
    
            // this will hold an english voice
            var english_voice = "";
    
            // find voice by language locale "en-US"
            // if not then select the first voice
            for (var i = 0; i < available_voices.length; i++) {
              if (available_voices[i].lang === "en-US") {
                english_voice = available_voices[i];
                break;
              }
            }
            if (english_voice === "") english_voice = available_voices[0];
    
            // new SpeechSynthesisUtterance object
            var utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.2;
            utter.text = "Oh no" + window.localStorage.getItem("name", name) + "This is colour green";
            utter.voice = english_voice;
    
            
            window.speechSynthesis.speak(utter);
          }
        
    })
});
black.forEach( function(e){
    e.addEventListener('click', function func (){
       if (window.speechSynthesis.getVoices().length == 0) {
            window.speechSynthesis.addEventListener("voiceschanged", function () {
              textToSpeech();
            });
          } else {
            // languages list available, no need to wait
            textToSpeech();
          }
          function textToSpeech() {
            // get all voices that browser offers
            var available_voices = window.speechSynthesis.getVoices();
    
            // this will hold an english voice
            var english_voice = "";
    
            // find voice by language locale "en-US"
            // if not then select the first voice
            for (var i = 0; i < available_voices.length; i++) {
              if (available_voices[i].lang === "en-US") {
                english_voice = available_voices[i];
                break;
              }
            }
            if (english_voice === "") english_voice = available_voices[0];
    
            // new SpeechSynthesisUtterance object
            var utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.2;
            utter.text = "Oh no" + window.localStorage.getItem("name", name) + "This is colour black";
            utter.voice = english_voice;
    
            
            window.speechSynthesis.speak(utter);
          }
        
    })
});
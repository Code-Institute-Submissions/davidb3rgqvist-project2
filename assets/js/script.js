
// Array with words
const words = [
    {"fr": "comme", "en": "as"},
    {"fr": "je", "en": "I"},
    {"fr": "son", "en": "his"},
    {"fr": "que", "en": "that"},
    {"fr": "il", "en": "il"},
    {"fr": "était", "en": "was"},
    {"fr": "pour", "en": "for"},
    {"fr": "sur", "en": "on"},
    {"fr": "sont", "en": "are"},
    {"fr": "avec", "en": "with"},
    {"fr": "ils", "en": "they"},
    {"fr": "être", "en": "be"},
    {"fr": "à", "en": "at"},
    {"fr": "un", "en": "one"},
    {"fr": "avoir", "en": "have"},
    {"fr": "à partir de", "en": "from"},
    {"fr": "par", "en": "by"},
    {"fr": "chaud", "en": "hot"},
    {"fr": "mot", "en": "word"},
    {"fr": "mais", "en": "but"},
    {"fr": "que", "en": "what"},
    {"fr": "certains", "en": "some"},
    {"fr": "est", "en": "is"},
    {"fr": "il", "en": "it"},
    {"fr": "vous", "en": "you"},
    {"fr": "ou", "en": "or"},   
    {"fr": "eu", "en": "had"},
    {"fr": "la", "en": "the"},
    {"fr": "de", "en": "of"},
  ]
  // shuffle the array? 

  document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            console.log("mouse click");
        });
    }

    document.getElementById("input-name").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            console.log("enter1 click");
        }
    });

    document.getElementById("input-word").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            console.log("enter2 click");
        }
    });
});


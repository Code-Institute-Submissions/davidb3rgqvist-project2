document.addEventListener("DOMContentLoaded", function() {
  // Add username to the game heading
  const userNameElement = document.getElementById("user-name");
  const userNameDisplayElement = document.getElementById("user-heading");
  const startButton = document.getElementById("start-game");

  startButton.addEventListener("click", function() {
    const userNameValue = userNameElement.value;
    userNameDisplayElement.textContent = userNameValue;
    userNameElement.value = "";
    showGameSection();
    displayWord();
  });

  document.getElementById("user-name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const userNameValue = userNameElement.value;
      userNameDisplayElement.textContent = userNameValue;
      userNameElement.value = "";
      showGameSection();
      displayWord();
    }
  });

  // Show and hide sections
  const introSection = document.getElementById("intro");
  const gameSection = document.getElementById("game");
  const scoreSection = document.getElementById("score");

  const exitGameButton = document.getElementById("exit-game");
  const playAgainButton = document.getElementById("play-again");
  const restartGameButton = document.getElementById("restart-game");

  // Show intro-section and hide others
  function showIntroSection() {
    introSection.classList.remove("hide");
    gameSection.classList.add("hide");
    scoreSection.classList.add("hide");
  }

  // Show game-section and hide others
  function showGameSection() {
    introSection.classList.add("hide");
    gameSection.classList.remove("hide");
    scoreSection.classList.add("hide");
  }

  // Show score-section and hide others
  function showScoreSection() {
    introSection.classList.add("hide");
    gameSection.classList.add("hide");
    scoreSection.classList.remove("hide");
  }

  exitGameButton.addEventListener("click", function() {
    showScoreSection();
  });

  playAgainButton.addEventListener("click", function() {
    showGameSection();
  });

  restartGameButton.addEventListener("click", function() {
    showGameSection();
  });

  // Game

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
;

  function shuffleWords(words) {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  }

  const shuffledWords = shuffleWords([...words]);

  let currentWordIndex = 0;

  function displayWord() {
    const flashcardElement = document.getElementById("flashcard");
    flashcardElement.textContent = shuffledWords[currentWordIndex].en;
    flashcardElement.style.fontSize = "30px";
    flashcardElement.style.fontWeight = "bold";
  }

  function resetGame() {
    currentWordIndex = 0;
    displayWord();
    showGameSection();
    document.getElementById("input-word").style.display = "block";
    document.getElementById("play-again").style.display = "none";
    document.getElementById("wrong-answer").style.display = "none";
    userInputElement.value = "";

    const flashcardElement = document.getElementById("flashcard");
                flashcardElement.style.color = "black";
}


  function checkAnswer() {
    const userInputElement = document.getElementById("input-word");
    const flashcardElement = document.getElementById("flashcard");
    const wrongAnswerDiv = document.getElementById("wrong-answer");
    const submitButton = document.getElementById("user-answer");
    const playAgainButton = document.getElementById("play-again");


    if (userInputElement.value.toLowerCase() === shuffledWords[currentWordIndex].fr.toLowerCase()) {
      // Correct answer, move to the next word
      currentWordIndex++;
      displayWord();
      userInputElement.value = "";
      wrongAnswerDiv.style.display = "none";
      submitButton.style.display = "block";
      playAgainButton.style.display = "none";
    } else {
        // Incorrect answer, show wrong answer message and reveal the French word
        wrongAnswerDiv.style.display = "block"; // Show the wrong answer message
        flashcardElement.textContent = "Correct word is: " + shuffledWords[currentWordIndex].fr;
        flashcardElement.style.color = "#f1f2f2";
        flashcardElement.style.backgroundColor = "rgb(197, 21, 21";
        userInputElement.style.display = "none";
        submitButton.style.display = "none";
        playAgainButton.style.display = "block";
        
        playAgainButton.addEventListener("click", function() {
            resetGame();
        });
    }
  }
   
 
  
  //Add event listener for the "Submit" button
            document.getElementById("user-answer").addEventListener("click", function() {
                document.getElementById("user-answer").style.display = "block";
                checkAnswer();
            });

           /* // Add event listener for the "Play Again" button
            document.getElementById("play-again").addEventListener("click", function() {
                // Reset the game and show the Submit button
                currentWordIndex = 0;
                displayWord();
                showGameSection();
                document.getElementById("user-answer").style.display = "block";
                document.getElementById("play-again").style.display = "none";
                
            });*/
        });


  document.getElementById("input-word").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });

  document.getElementById("user-answer").addEventListener("click", function() {
    checkAnswer();
  });

  // Initial setup
  showIntroSection();
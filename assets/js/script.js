document.addEventListener("DOMContentLoaded", function() {
  // Add username to the game heading
  const userNameElement = document.getElementById("user-name");
  const userNameDisplayElement = document.getElementById("user-heading");
  const startButton = document.getElementById("start-game");
  const userInputElement = document.getElementById("input-word");

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
  const restartGameButton = document.getElementById("back-to-game");

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
    userInputElement.focus();
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
    userInputElement.focus();
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

  let consecutiveCorrectAnswers = 0;

  function displayWord() {
    const flashcardElement = document.getElementById("flashcard");
    flashcardElement.textContent = shuffledWords[currentWordIndex].en;
    flashcardElement.style.fontSize = "30px";
    flashcardElement.style.fontWeight = "bold";
    flashcardElement.style.color = "#393E40";
    flashcardElement.style.backgroundColor = "rgb(241, 236, 230)";
    userInputElement.focus();
  }

  
  function resetGame() {
    currentWordIndex = 0;
    displayWord();
    showGameSection();
    userInputElement.focus();
    document.getElementById("input-word").style.display = "block";
    document.getElementById("user-answer").style.display = "block";
    document.getElementById("play-again").style.display = "none";
    document.getElementById("wrong-answer").style.display = "none";
    userInputElement.value = "";
}
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    function updateHighScores(score) {
        // Add the new score to the high scores list
        highScores.push(score);

        // Sort the high scores in descending order
        highScores.sort((a, b) => b - a);

        // Keep only the top 10 scores
        highScores = highScores.slice(0, 10);

        // Save the high scores to localStorage
        localStorage.setItem("highScores", JSON.stringify(highScores));
    }

    function displayHighScores() {
        // Display the top 10 high scores in the results section
        const scoreSection = document.getElementById("results");
        const highScoresList = document.createElement("ol");
        highScoresList.id = "high-scores-list";

        highScores.forEach((score, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `#${index + 1}: ${score} words in a row`;
            highScoresList.appendChild(listItem);
        });

        // Add the high scores list to the results section
        scoreSection.innerHTML = "<h1>High Scores</h1>";
        scoreSection.appendChild(highScoresList);
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
      consecutiveCorrectAnswers++;
      displayWord();
      userInputElement.value = "";
      wrongAnswerDiv.style.display = "none";
      submitButton.style.display = "block";
      playAgainButton.style.display = "none";
    } else {
        // Incorrect answer, show wrong answer message and reveal the French word
        consecutiveCorrectAnswers = 0;
        wrongAnswerDiv.style.display = "block";
        flashcardElement.textContent = "Correct: " + shuffledWords[currentWordIndex].fr;
        flashcardElement.style.color = "#f1f2f2";
        flashcardElement.style.backgroundColor = "rgb(197, 21, 21)";
        userInputElement.style.display = "none";
        submitButton.style.display = "none";
        playAgainButton.style.display = "block";
        
        playAgainButton.addEventListener("click", function() {
            resetGame();
        });
       
        // Update and display high scores
        updateHighScores(consecutiveCorrectAnswers);
        displayHighScores();
    }
    }
 

    document.getElementById("user-answer").addEventListener("click", function() {
        checkAnswer();
    });

    document.getElementById("input-word").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          checkAnswer();
        }
      });
    
    // Add event listener for the "Play Again" button
    document.getElementById("play-again").addEventListener("click", function() {
        // Reset the game and show the Submit button
        resetGame();
    });
    
    // Initial setup
    showIntroSection();



});



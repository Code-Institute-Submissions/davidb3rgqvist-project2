document.addEventListener("DOMContentLoaded", function() {
  // Clear the the highscore
  localStorage.clear();
        
  // Add username to the game heading
const userNameElement = document.getElementById("user-name");
const userNameDisplayElement = document.getElementById("user-heading");
const startButton = document.getElementById("start-game");
const userInputElement = document.getElementById("input-word");

// Show and hide sections
const introSection = document.getElementById("intro");
const gameSection = document.getElementById("game");
const scoreSection = document.getElementById("score");
const exitGameButton = document.getElementById("exit-game");
const playAgainButton = document.getElementById("play-again");
const backToGameButton = document.getElementById("back-to-game");

const speakButton = document.getElementById("speak-button");

// Add this code for correct answer count
const correctAnswerCountElement = document.getElementById("correct-answer-count");
// All event listeners:

speakButton.addEventListener("click", function() {
    speakWord(shuffledWords[currentWordIndex].fr);
});

// Add event listener to the Start Game button, together with validation
startButton.addEventListener("click", function() {
  const userNameValue = userNameElement.value;
  if (userNameValue !== "") {
    userNameDisplayElement.textContent = userNameValue;
    showGameSection();
    displayWord();
} else {
    // Alert the user or handle the case where the username is empty
    alert("Please enter a valid username.");
}
});
// Add event listener to the username input field, together with validation
document.getElementById("user-name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const userNameValue = userNameElement.value.trim();
        if (userNameValue !== "") {
            userNameDisplayElement.textContent = userNameValue;
            showGameSection();
            displayWord();
        } else {
            // Alert the user or handle the case where the username is empty
            alert("Please enter a valid username.");
        }
    }
  });
     // Add event listener for the "Submit" button
     document.getElementById("user-answer").addEventListener("click", function() {
        checkAnswer();
    });

    // Add event listener for the "Text input"
    document.getElementById("input-word").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          checkAnswer();
        }
      });
    
    // Add event listener for the "Play Again" button
    document.getElementById("play-again").addEventListener("click", function() {
        resetGame();
    });

    exitGameButton.addEventListener("click", function() {
        showScoreSection();
        displayHighScores();
      });
      
      playAgainButton.addEventListener("click", function() {
        userInputElement.focus();
        showGameSection();
      });
      
      backToGameButton.addEventListener("click", function() {
        showGameSection();
      });

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

function updateCorrectAnswerCount(count) {
    correctAnswerCountElement.textContent = "Correct Answers: " + count;
}

function resetCorrectAnswerCount() {
    updateCorrectAnswerCount(0);
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'fr-FR';
    speechSynthesis.speak(utterance);
}

 // Game

 // Array with the game words
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
// Array with the high scores
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Shuffles the word to have a new "first" word every time the webpage reloads.
  function shuffleWords(words) {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  }

  const shuffledWords = shuffleWords([...words]);

  // Add the word to the flashcard in the game
  let currentWordIndex = 0;
  let totalCorrectAnswers = 0;
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

  // Reset the game
  function resetGame() {
    currentWordIndex = 0;
    totalCorrectAnswers = 0;
    resetCorrectAnswerCount();
    displayWord();
    showGameSection();
    userInputElement.focus();
    document.getElementById("input-word").style.display = "block";
    document.getElementById("user-answer").style.display = "block";
    document.getElementById("play-again").style.display = "none";
    document.getElementById("wrong-answer").style.display = "none";
    userInputElement.value = "";
}
    // Check if the user have inserted the correct word
    function checkAnswer() {
      const userInputElement = document.getElementById("input-word");
      const flashcardElement = document.getElementById("flashcard");
      const wrongAnswerDiv = document.getElementById("wrong-answer");
      const submitButton = document.getElementById("user-answer");
      const playAgainButton = document.getElementById("play-again");

    if (userInputElement.value.toLowerCase() === shuffledWords[currentWordIndex].fr.toLowerCase()) {
      currentWordIndex++;
      consecutiveCorrectAnswers++;
      totalCorrectAnswers++;
      flashcardElement.style.color = "green";
      flashcardElement.style.backgroundColor = "green";
      setTimeout(() => {
        displayWord();
      }, 150)
      userInputElement.value = "";
      wrongAnswerDiv.style.display = "none";
      submitButton.style.display = "block";
      playAgainButton.style.display = "none";
      speakButton.style.display= "none";
      updateCorrectAnswerCount(totalCorrectAnswers);
    } else {
        speakWord(shuffledWords[currentWordIndex].fr);
        consecutiveCorrectAnswers = 0;
        speakButton.style.display= "block";
        wrongAnswerDiv.style.display = "block";
        flashcardElement.textContent = "Correct word = " + shuffledWords[currentWordIndex].fr;
        flashcardElement.style.color = "#f1f2f2";
        flashcardElement.style.backgroundColor = "rgb(197, 21, 21)";
        userInputElement.style.display = "none";
        submitButton.style.display = "none";
        playAgainButton.style.display = "block";
        
        playAgainButton.addEventListener("click", function() {
            resetGame();
        });

        // Gets the score and sends it to the scoreboard
        function updateHighScores(score) {
            highScores.push(score);
            highScores.sort((a, b) => b - a);
            highScores = highScores.slice(0, 20);
            localStorage.setItem("highScores", JSON.stringify(highScores));
        }
    
        function displayHighScores() {
            const scoreSection = document.getElementById("results");
            const highScoresList = document.createElement("ol");
            highScoresList.id = "high-scores-list";
              highScores.forEach((score, index) => {
                const listItem = document.createElement("ol");
                highScoresList.appendChild(listItem);
                if (score !== undefined && score !== null) {
                    const listItem = document.createElement("ol");
                    listItem.textContent = `${score} words in a row`;
                    highScoresList.appendChild(listItem);
                }
                
            });

            scoreSection.innerHTML = "<h1>Your top 20 High Scores</h1>";
            scoreSection.appendChild(highScoresList);
        }
        
        updateHighScores(totalCorrectAnswers);
        displayHighScores();  


    } 
    }
 
 
    
    // Initial setup
    showIntroSection()
});



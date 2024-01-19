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

  function checkAnswer() {
    const userInputElement = document.getElementById("input-word");

    if (userInputElement.value.toLowerCase() === shuffledWords[currentWordIndex].fr.toLowerCase()) {
      // Correct answer, move to the next word
      currentWordIndex++;
      displayWord();
      userInputElement.value = "";
    } else {
      alert("Incorrect answer! Try again.");
    }
  }
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
});
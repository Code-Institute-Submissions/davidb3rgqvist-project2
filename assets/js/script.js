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
    displayWord();
  });

  restartGameButton.addEventListener("click", function() {
    showIntroSection();
  });

  // Game

  const words = [
    {"fr": "comme", "en": "as"},
    {"fr": "je", "en": "I"},
    // Add other word pairs as needed
  ];

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
  }

  function checkAnswer() {
    const userInputElement = document.getElementById("input-word");

    if (userInputElement.value.toLowerCase() === shuffledWords[currentWordIndex].fr.toLowerCase()) {
      // Correct answer, move to the next word
      currentWordIndex++;
      displayWord();
      userInputElement.value = ""; // Clear the input
    } else {
      // Incorrect answer, handle accordingly
      // For now, you can show an alert or perform any other action
      alert("Incorrect answer! Try again.");
    }
  }

  // Add event listener for "Enter" key press
  document.getElementById("input-word").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });

  // Initial setup
  showIntroSection();
});
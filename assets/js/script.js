


document.addEventListener("DOMContentLoaded", function() {

    // Add username to the game heading
      const userNameElement = document.getElementById("user-name");
      const userNameDisplayElement = document.getElementById("user-heading");
      const updateButton = document.getElementById("start-game");

        updateButton.addEventListener("click", function() {
        const userNameValue = userNameElement.value;
        userNameDisplayElement.textContent = userNameValue;
        userNameElement.value = "";
      });

    function shuffleWords(words) {
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }
        return words;
    }
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
      ];

    const shuffledWords = shuffleWords(words);

    // Show and hide sections
    const introSection = document.getElementById("intro");
    const gameSection = document.getElementById("game");
    const scoreSection = document.getElementById("score");

    const startGameButton = document.getElementById("start-game");
    const exitGameButton = document.getElementById("exit-game");
    const playAgainButton = document.getElementById("play-again");


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

   

    startGameButton.addEventListener("click", function() {
      // Perform any necessary setup for the game
      // For now, just switch to the game section
      showGameSection();
    });

    exitGameButton.addEventListener("click", function() {
      // Perform any necessary cleanup for exiting the game
      // For now, just switch to the score section
      showScoreSection();
    });

    playAgainButton.addEventListener("click", function() {
      // Perform any necessary reset for playing again
      // For now, just switch to the intro section
      showGameSection();
    });
  });

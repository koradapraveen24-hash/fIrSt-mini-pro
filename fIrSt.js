let computerMove = "";

    score = {
      win: 0,
      lose: 0,
      tie: 0,
    };

    updateScoreElement();

    function pickComputerMove() {
      let randomMove = Math.random();

      if (randomMove >= 0 && randomMove <= 1 / 3) {
        computerMove = "rock";
      } else if (randomMove >= 1 / 3 && randomMove <= 2 / 3) {
        computerMove = "paper";
      } else if (randomMove > 2 / 3 && randomMove <= 1) {
        computerMove = "scissors";
      }
    }

    function playGame(playerMove) {
      pickComputerMove();

      let result = "";

      if (playerMove === "sicssors") {
        if (computerMove === "rock") {
          result = "YOU LOSE";
        } else if (computerMove === "paper") {
          result = "YOU WIN";
        } else if (computerMove === "scissors") {
          result = "TIE";
        }
      } else if (playerMove === "paper") {
        if (computerMove === "rock") {
          result = "YOU WIN";
        } else if (computerMove === "paper") {
          result = "TIE";
        } else if (computerMove === "sicssors") {
          result = "YOU LOSE";
        }
      } else if (playerMove === "rock") {
        if (computerMove === "rock") {
          result = "TIE";
        } else if (computerMove === "paper") {
          result = "YOU WIN";
        } else if (computerMove === "sicssors") {
          result = "YOU LOSE";
        }
      }

      if (result === "YOU WIN") {
        score.win = score.win + 1;
      } else if (result === "YOU LOSE") {
        score.lose = score.lose + 1;
      } else if (result === "TIE") {
        score.tie = score.tie + 1;
      }

      updateScoreElement();

      document.querySelector(".js-result").innerHTML = result;

      document.querySelector(".js-moves").innerHTML =
        ` YOY<img src="fIrSt-images/${playerMove}-emoji.png" class="move-icon">
      <img src="fIrSt-images/${computerMove}-emoji.png" class="move-icon"> COMPUTER`;
    }

    function updateScoreElement() {
      document.querySelector(".js-score").innerHTML =
        `WIN: ${score.win} LOSE: ${score.lose} TIE: ${score.tie}`;
    }

const playerChoose = document.querySelector(".container");
const restartButton = document.getElementById("restart");
let resultCard = document.querySelector(".result-card");
let displayResult = document.querySelector(".result-container");
let playerPoints = document.getElementById("player-points");
let computerPoints = document.getElementById("computer-points");

let points = { player: 0, computer: 0 };

playerChoose.addEventListener("click", (e) => {
  if (e.target.id !== "") {
    let randomNumber = Math.random();

    let playerChoice = e.target.id;
    let computerChoice;

    if (randomNumber >= 0 && randomNumber < 0.3) {
      computerChoice = "rock";
    } else if (randomNumber > 0.3 && randomNumber < 0.6) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissor";
    }

    console.log(computerChoice);

    if (playerChoice === "rock") {
      if (computerChoice === playerChoice) {
        resultCard.innerHTML = `<h2>Draw!</h2>
                 <h3>Computer Choice : </h3>
                 <img src="img/${computerChoice}.png">
                 <h2>${computerChoice}</h2>`;
      }

      if (computerChoice === "paper") {
        resultCard.innerHTML = `<h2>You Lose!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
        points.computer += 1;
      }

      if (computerChoice === "scissor") {
        resultCard.innerHTML = `<h2>You Win!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
        points.player += 1;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === playerChoice) {
        resultCard.innerHTML = `<h2>Draw!</h2>
                 <h3>Computer Choice : </h3>
                 <img src="img/${computerChoice}.png">
                 <h2>${computerChoice}</h2>`;
      }

      if (computerChoice === "scissor") {
        resultCard.innerHTML = `<h2>You Lose!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
        points.computer += 1;
      }

      if (computerChoice === "rock") {
        resultCard.innerHTML = `<h2>You Win!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
        points.player += 1;
      }
    }

    if (playerChoice === "scissor") {
      if (computerChoice === playerChoice) {
        resultCard.innerHTML = `<h2>Draw!</h2>
                 <h3>Computer Choice : </h3>
                 <img src="img/${computerChoice}.png">
                 <h2>${computerChoice}</h2>`;
      }

      if (computerChoice === "rock") {
        resultCard.innerHTML = `<h2>You Lose!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
        points.computer += 1;
      }

      if (computerChoice === "paper") {
        resultCard.innerHTML = `<h2>You Win!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
        points.player += 1;
      }
    }

    displayResult.style.display = "flex";
    playerPoints.innerHTML = `player points : ${points.player}`;
    computerPoints.innerHTML = `computer points : ${points.computer}`;
  }
});

window.addEventListener("click", (e) => {
  if (e.target === displayResult) {
    displayResult.style.display = "none";
  }
});

restartButton.addEventListener("click", () => {
  if (confirm("are you sure?")) {
    points.player = 0;
    points.computer = 0;

    playerPoints.innerHTML = `player points : ${points.player}`;
    computerPoints.innerHTML = `computer points : ${points.computer}`;
  }
});

const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissor = document.getElementById("scissor");
let displayResult = document.querySelector(".result-container");
let resultCard = document.querySelector(".result-card");
let playerPoints = document.getElementById("player-points");
let computerPoints = document.getElementById("computer-points");
let points = {
  player: 0,
  computer: 0,
};

// player click rock
playerRock.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  if (computerChoice === "scissor") {
    resultCard.innerHTML = `<h2>You Win!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
    points.player += 1;
  } else if (computerChoice === "paper") {
    resultCard.innerHTML = `<h2>You Lose!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
    points.computer += 1;
  } else {
    resultCard.innerHTML = `<h2>Draw!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h2>${computerChoice}</h2>`;
  }

  displayResult.style.display = "flex";
  playerPoints.innerHTML = `player points : ${points.player}`;
  computerPoints.innerHTML = `computer points : ${points.computer}`;
});

// player click paper
playerPaper.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  if (computerChoice === "scissor") {
    resultCard.innerHTML = `<h2>You Lose!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h3>${computerChoice}</h3>`;
    points.computer += 1;
  } else if (computerChoice === "rock") {
    resultCard.innerHTML = `<h2>You Win!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h3>${computerChoice}</h3>`;
    points.player += 1;
  } else {
    resultCard.innerHTML = `<h2>Draw!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h3>${computerChoice}</h3>`;
  }
  displayResult.style.display = "flex";
  playerPoints.innerHTML = `player points : ${points.player}`;
  computerPoints.innerHTML = `computer points : ${points.computer}`;
});

// player click scissor
playerScissor.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  if (computerChoice === "rock") {
    resultCard.innerHTML = `<h2>You Lose!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h3>${computerChoice}</h3>`;
    points.computer += 1;
  } else if (computerChoice === "paper") {
    resultCard.innerHTML = `<h2>You Win!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h3>${computerChoice}</h3>`;
    points.player += 1;
  } else {
    resultCard.innerHTML = `<h2>Draw!</h2>
    <h3>Computer Choice : </h3>
    <img src="img/${computerChoice}.png">
    <h3>${computerChoice}</h3>`;
  }
  displayResult.style.display = "flex";
  playerPoints.innerHTML = `player points : ${points.player}`;
  computerPoints.innerHTML = `computer points : ${points.computer}`;
});

// close the modal
window.addEventListener("click", closeModal);

function closeModal(e) {
  if (e.target == displayResult) {
    displayResult.style.display = "none";
  }
}

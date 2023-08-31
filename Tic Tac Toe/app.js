const playField = document.querySelector('.grid');
const gameItems = document.querySelectorAll('.box');
const title = document.querySelector('.title');
const xScore = document.querySelector('.x-score span');
const oScore = document.querySelector('.o-score span');
const tieScore = document.querySelector('.ties-score span');
const resultContainer = document.querySelector('.game-result');
const stateMark = document.querySelector('.turn-state');
let counter = 0;
let ties = [];
let score = {
  x: 0,
  o: 0,
  t: 0,
};

playField.addEventListener('click', (e) => {
  if (e.target.className !== 'box') {
    return;
  }

  if (e.target.innerText) {
    return;
  }

  if (counter % 2 === 0) {
    e.target.innerHTML = `<span class="x-mark">X</span>`;
    stateMark.innerText = `O TURNS`;
    stateMark.classList.remove('x-mark');
    stateMark.classList.add('o-mark');
  } else {
    e.target.innerHTML = `<span class="o-mark">O</span>`;
    stateMark.innerText = `X TURNS`;
    stateMark.classList.remove('o-mark');
    stateMark.classList.add('x-mark');
  }

  ties.push(1);

  checkWinners();

  counter++;
});

function checkWinners() {
  if (
    gameItems[0].innerText === 'X' &&
    gameItems[1].innerText === 'X' &&
    gameItems[2].innerText === 'X'
  ) {
    // resultContainer.innerText = 'X WINS!';
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }

  if (
    gameItems[3].innerText === 'X' &&
    gameItems[4].innerText === 'X' &&
    gameItems[5].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }

  if (
    gameItems[6].innerText === 'X' &&
    gameItems[7].innerText === 'X' &&
    gameItems[8].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }
  if (
    gameItems[0].innerText === 'X' &&
    gameItems[3].innerText === 'X' &&
    gameItems[6].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }
  if (
    gameItems[1].innerText === 'X' &&
    gameItems[4].innerText === 'X' &&
    gameItems[7].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }
  if (
    gameItems[2].innerText === 'X' &&
    gameItems[5].innerText === 'X' &&
    gameItems[8].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }
  if (
    gameItems[0].innerText === 'X' &&
    gameItems[4].innerText === 'X' &&
    gameItems[8].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }
  if (
    gameItems[2].innerText === 'X' &&
    gameItems[4].innerText === 'X' &&
    gameItems[6].innerText === 'X'
  ) {
    renderWinners('X');
    ties = [];
    score.x++;
    xScore.innerText = score.x;
    return;
  }

  if (
    gameItems[0].innerText === 'O' &&
    gameItems[1].innerText === 'O' &&
    gameItems[2].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }

  if (
    gameItems[3].innerText === 'O' &&
    gameItems[4].innerText === 'O' &&
    gameItems[5].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }

  if (
    gameItems[6].innerText === 'O' &&
    gameItems[7].innerText === 'O' &&
    gameItems[8].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }
  if (
    gameItems[0].innerText === 'O' &&
    gameItems[3].innerText === 'O' &&
    gameItems[6].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }
  if (
    gameItems[1].innerText === 'O' &&
    gameItems[4].innerText === 'O' &&
    gameItems[7].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }
  if (
    gameItems[2].innerText === 'O' &&
    gameItems[5].innerText === 'O' &&
    gameItems[8].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }
  if (
    gameItems[0].innerText === 'O' &&
    gameItems[4].innerText === 'O' &&
    gameItems[8].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }

  if (
    gameItems[2].innerText === 'O' &&
    gameItems[4].innerText === 'O' &&
    gameItems[6].innerText === 'O'
  ) {
    renderWinners('O');
    ties = [];
    score.o++;
    oScore.innerText = score.o;
    return;
  }

  if (ties.length == 9) {
    renderWinners('T');
    score.t++;
    tieScore.innerText = score.t;
    ties = [];
    return;
  }
}

function renderWinners(winner) {
  if (winner === 'X') {
    resultContainer.innerHTML = `<div class="x-wins">
    <h1>X WINS THE ROUND!</h1>
    <button class="btn icon-center"><img src="img/next-icon.svg" alt="">CONTINUE</button>
    <button class="btn icon-center"><img src="img/restart-icon.svg" alt="">RESTART</button></div>`;
    resultContainer.style.display = 'flex';
    // resultContainer.classList.add('x-wins');
  }

  if (winner === 'O') {
    resultContainer.innerHTML = `<div class="o-wins">
    <h1>O WINS THE ROUND!</h1>
    <button class="btn icon-center"><img src="img/next-icon.svg" alt="">CONTINUE</button>
    <button class="btn icon-center"><img src="img/restart-icon.svg" alt="">RESTART</button></div>`;
    resultContainer.style.display = 'flex';
    // resultContainer.classList.add('o-wins');
  }

  if (winner === 'T') {
    resultContainer.innerHTML = `<div class="ties">
    <h1>ROUND TIES!</h1>
    <button class="btn icon-center"><img src="img/next-icon.svg" alt="">CONTINUE</button>
    <button class="btn icon-center"><img src="img/restart-icon.svg" alt="">RESTART</button></div>`;
    resultContainer.style.display = 'flex';
    // resultContainer.classList.add('ties');
  }
}

window.addEventListener('click', (e) => {
  if (e.target.innerText == 'RESTART') {
    location.reload();
  }

  if (e.target.innerText == 'CONTINUE') {
    for (let i = 0; i < gameItems.length; i++) {
      gameItems[i].innerHTML = '';
    }
    counter = 0;
    ties = [];
    resultContainer.style.display = 'none';
    stateMark.innerText = 'X TURNS';
    stateMark.classList.remove('o-mark');
    stateMark.classList.add('x-mark');
  }
});

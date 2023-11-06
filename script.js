const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const secondPlayerSelect = document.querySelector("#secondPlayer");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetButton = document.querySelector("#resetButton"); 

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");


let player;
let computer;
let player2;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

resetButton.addEventListener("click", () => {
  player = null;
  player2 = null;
  computer = null;
  result = null;
  playerText.textContent = "Player: ";
  computerText.textContent = "Computer: ";
  secondPlayer.textContent = "Player 2: ";
  resultText.textContent = "Result: ";

  choiceBtns.forEach(button => {
    button.disabled = false;
  });
});

const winGif = new Image();
winGif.src = 'assets/w.gif'; 

const loseGif = new Image();
loseGif.src = 'assets/l.gif'; 

const drawGif = new Image();
drawGif.src = 'assets/d.gif'; 

function displayWinGif() {
  document.getElementById('resultGif').appendChild(winGif);
}

function displayLoseGif() {
  document.getElementById('resultGif').appendChild(loseGif);
}

function displayDrawGif() {
  document.getElementById('resultGif').appendChild(drawGif);
}

function checkWinner() {
  document.getElementById('resultGif').innerHTML = ''; // Clear previous result

  const winSound = new Audio('assets/win.wav'); 
  const loseSound = new Audio('assets/lose.wav'); 
  const drawSound = new Audio('assets/d.wav'); 

  resultText.textContent = "";

  if (player == computer) {
    displayDrawGif();
    drawSound.play(); 
    resultText.textContent = "Draw!";
  } else if (computer == "Rock") {
    if (player == "Paper") {
      displayWinGif();
      winSound.play(); 
      resultText.textContent = "You Win!";
    } else {
      displayLoseGif();
      loseSound.play(); 
      resultText.textContent = "You Lose!";
    }
  } else if (computer == "Paper") {
    if (player == "Scissors") {
      displayWinGif();
      winSound.play(); 
      resultText.textContent = "You Win!";
    } else {
      displayLoseGif();
      loseSound.play(); 
      resultText.textContent = "You Lose!";
    }
  } else if (computer == "Scissors") {
    if (player == "Rock") {
      displayWinGif();
      winSound.play(); 
      resultText.textContent = "You Win!";
    } else {
      displayLoseGif();
      loseSound.play(); 
      resultText.textContent = "You Lose!";
    }
  }
}

resetButton.addEventListener("click", () => {
  location.reload(); 
});

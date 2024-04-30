const options = document.querySelectorAll(".gameOption");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let choices = ["rock", "paper", "scissors"];

let yourScore = 0;
let yourScoreSpan = document.getElementById("yourScore");

let pcScore = 0;
let pcScoreSpan = document.getElementById("pcScore");

options.forEach((option) => {
  option.addEventListener("click", () => {
    game(option.id);
  });
});

function game(id) {
  let pcChoice = choices[Math.floor(Math.random() * 3)];
  let winner = chooseWinner(id, pcChoice);
  updateScore(winner);
  updateStyles(id, "yourStyle");
  updateStyles(pcChoice, "pcStyle");
}

function chooseWinner(you, pc) {
  if (you === pc) {
    return "DRAW";
  } else if (
    (you === "rock" && pc === "scissors") ||
    (you === "paper" && pc === "rock") ||
    (you === "scissors" && pc === "paper")
  ) {
    return "YOU";
  } else {
    return "PC";
  }
}

function updateScore(winner) {
  if (winner === "YOU") {
    yourScore++;
    yourScoreSpan.innerHTML = yourScore;
  }

  if (winner === "PC") {
    pcScore++;
    pcScoreSpan.innerHTML = pcScore;
  }

  return;
}

function updateStyles(choice, style) {
  if (choice === "rock") {
    rock.classList.add(style);
    setTimeout(() => {
      rock.classList.remove(style);
    }, 1500);
  }
  if (choice === "paper") {
    paper.classList.add(style);
    setTimeout(() => {
      paper.classList.remove(style);
    }, 1500);
  }
  if (choice === "scissors") {
    scissors.classList.add(style);
    setTimeout(() => {
      scissors.classList.remove(style);
    }, 1500);
  }
}

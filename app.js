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
  console.log(winner);
  updateScore(winner);
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

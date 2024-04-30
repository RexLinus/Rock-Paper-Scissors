const options = document.querySelectorAll(".gameOption");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let choices = ["rock", "paper", "scissors"];

options.forEach((option) => {
  option.addEventListener("click", () => {
    game(option.id);
  });
});

function game(id) {
  let pcChoice = choices[Math.floor(Math.random() * 3)];
}

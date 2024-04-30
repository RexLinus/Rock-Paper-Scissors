const options = document.querySelectorAll(".gameOption");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

options.forEach((option) => {
  option.addEventListener("click", () => {
    game(option.id);
  });
});

function game(id) {
  console.log(id);
}

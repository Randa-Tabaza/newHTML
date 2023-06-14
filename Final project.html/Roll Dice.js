let guessBtn = document.getElementById("guessBtn");
let displayResult = document.getElementById("result");

function start() {
  guessBtn.disabled = false;
  guessBtn.addEventListener("click", handleClick);
}

function rollDice() {
  var dice1Value = Math.floor(Math.random() * 6) + 1;
  var dice2Value = Math.floor(Math.random() * 6) + 1;
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
  dice1.setAttribute("src", "Dice images/die" + dice1Value + ".png");
  dice2.setAttribute("src", `Dice images/die` + dice2Value + ".png");
  return dice1Value + dice2Value;
}

function handleClick() {
  var targetNumber = rollDice();
  displayResults(targetNumber);
}

function displayResults(targetNumber) {
  if (targetNumber > 7) {
    displayResult.innerText = "You Win!";
  } else {
    displayResult.innerText = "You Lose!";
    guessBtn.disabled = true;
  }
}

start();

let attemptsNumber = document.getElementById("attemptsNumber");
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let displayResult = document.getElementById("displayResult");
let userInfoForm = document.getElementById("userInfoForm");
let dice1;
let dice2;
let targetNumber;
let attempts = 5;

userInfoForm.addEventListener("submit", handleSubmit);

function start() {
    guessBtn.addEventListener("click", handleClick);
    dice1 = document.getElementById("die1");
    dice2 = document.getElementById("die2");
}

function rollDice() {
    var dice1Value = Math.floor(Math.random() * 6) + 1;
    var dice2Value = Math.floor(Math.random() * 6) + 1;
    dice1.setAttribute("src", "Dice images/die" + dice1Value + ".png");
    dice2.setAttribute("src", "Dice images/die" + dice2Value + ".png");
    targetNumber = dice1Value + dice2Value;
}


function handleSubmit(e) {
    e.preventDefault();
    guessBtn.disabled = false;
    attemptsNumber.innerText = attempts;
}

function handleClick() {
    let userGuess = parseInt(guessInput.value);
    rollDice(); 
    displayResults(userGuess);
    attempts--;
    attemptsNumber.innerText = attempts;
    if (attempts === 0) {
        guessBtn.disabled = true;
        displayResult.innerText = "Game Over, you have finished your attempts :|";
    }
}

function displayResults(userGuess) {
    if (userGuess < 2 || userGuess > 12 || isNaN(userGuess)) {
        displayResult.innerText = "Invalid value, please enter a number value between 2 and 12";
    } 
    else if (userGuess === targetNumber) {
        guessBtn.disabled = true;
        displayResult.innerText = "Congratulations, your guess is correct :>";
    } 
    else {
        displayResult.innerText = `Wrong answer :( , try again. The correct value is ${targetNumber}`;
    }
}

start();


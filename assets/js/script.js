const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    playerChoice.innerHTML = userChoice
    generateComputerChoice
}))


function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices) + 1

    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    if (randomNumber === 2) {
        computerChoice = "Paper"
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === userChoice) {
        result = "You win!"
    }
    if (computerChoice === userChoice) {
        result = "You win!"
    }
    if (computerChoice === userChoice) {
        result = "You lose!"
    }
    if (computerChoice === userChoice) {
        result = "You lose!"
    }
}

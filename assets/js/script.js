// DECLARE VARIABLES 
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let randomNumber
const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
let result
const resultDisplay = document.getElementById('result')

// ???
possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    playGame()
}))

//DECLARE FUNCTIONS
function generateComputerChoice() {
    randomNumber = Math.floor(Math.random() * possibleChoices.length) // or you can use possibleChoices.length
    
    if (randomNumber === 0) {
      computerChoice = 'Rock'
    }
    if (randomNumber === 1) {
      computerChoice = 'Scissors'
    }
    if (randomNumber === 2) {
      computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

function compareChoices() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You win!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You lose...'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You lose...'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You lose...'
    }
    resultDisplay.innerHTML = result
}

function playGame() {
    generateComputerChoice()
    compareChoices()
}








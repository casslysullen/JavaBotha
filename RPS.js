const computerChoiceDisplay= document.getElementById('computer-choice');
const userChoiceDisplay= document.getElementById('user-choice');
const resultDisplay= document.getElementById('result');
//Because we only are using the few buttons, we have the querySelector grabbing buttons.
const possibleChoices= document.querySelectorAll('button');
let userChoice
let computerChoice
let result

//This is kinda like a forEach loop checking every button and looking for a click
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=> {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber= Math.floor(Math.random() *3) +1
    console.log(randomNumber)

    if(randomNumber===1) {
        computerChoice= 'rock'
    }
    if(randomNumber===2) {
        computerChoice= 'scissors'
    }
    if(randomNumber===3) {
        computerChoice= 'paper'
    }

    computerChoiceDisplay.innerHTML= computerChoice
}

function getResult() {
    if (computerChoice=== userChoice) {
        result="its a draw!"
    }
    if (computerChoice=== 'rock' && userChoice === 'paper') {
        result='User Wins'
    }
    if (computerChoice=== 'rock' && userChoice=== 'scissors') {
        result='Computer Wins'
    }
    if (computerChoice==='paper' && userChoice=== 'rock') {
        result='Computer Wins'
    }
    if (computerChoice==='paper' && userChoice=== 'scissors') {
        result='User Wins'
    }
    if (computerChoice==='scissors' && userChoice=== 'rock') {
        result='Computer Wins'
    }
    if (computerChoice==='scissors' && userChoice==='paper') {
        result='User Wins'
    }
    resultDisplay.innerHTML=result
}
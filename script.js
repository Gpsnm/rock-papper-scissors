 const computerChoiceDisplay = document.getElementById('computer-choice');
 const userChoiceDisplay = document.getElementById('user-choice');
 const result = document.getElementById('result');
 const possibleChoices = document.querySelectorAll('button');
 let userChoice;
 let computerChoice
 let results
let playerScore = 1;
let computerScore = 1;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice()
getResult();
}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    if (randomNumber === 1)
    computerChoice = 'rock'
    if (randomNumber === 2)
    computerChoice = 'paper'
    if (randomNumber === 3)
    computerChoice = 'scissors'
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice)
    results = 'its a draw!'
    if (computerChoice === 'rock' && userChoice === 'paper')
    results = 'You win!' + " " + playerScore++ + " point to the player"
    if (computerChoice === 'paper' && userChoice == 'scissors')
    results = 'You win!' + " " + playerScore++ + " point to the player"
    if (computerChoice === 'scissors' && userChoice === 'rock')
    results = 'You win!' + " " + playerScore++ + " point to the player"
    
    if (computerChoice === 'rock' && userChoice === 'scissors')
    results = 'You loose!' + " " + computerScore++ + " point to the computer"
    if (computerChoice === 'scissors' && userChoice === 'paper')
    results = 'You loose!' + " " + computerScore++ + " point to the computer"
    if (computerChoice === 'paper' && userChoice === 'rock')
    results = 'You loose!' + " " + computerScore++ + " point to the computer"
    if (computerScore > 5)
    results = ' Game Over Computer wins!'
    else if (playerScore > 5 )
    results = ' Game Over You Win!'
    result.innerHTML = results; 
    
}

function computerPlay(){
    const randomGame = ["rock","paper","scissors"];
    let compRandom = randomGame[Math.floor(Math.random() * randomGame.length )];
    return compRandom;
}

let playerWin = ("Player Wins This Round!");
let computerWin = ("Computer Wins This Round!")
let draw = ("Its A Draw!")
let score = 0;
function game (){
    computerSelection = computerPlay();
    playerSelection =prompt();
    if (computerSelection == "paper" && playerSelection == "rock")
        return (computerWin);
        if (computerSelection == "rock" && playerSelection == "paper")
        return (playerWin);
    
    if (computerSelection == "scissors" && playerSelection == "rock")
        return (playerWin);
    if (computerSelection == "rock" && playerSelection == "scissors")
        return (computerWin);
    if (computerSelection == "paper" && playerSelection == "scissors")
    return (playerWin);
    if (computerSelection == "scissors" && playerSelection == "paper")
    return (computerWin);
    else if ( computerSelection == playerSelection)
    return ("You Draw!")
}

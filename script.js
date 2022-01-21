// VAR FOR SCORING
let playerWin = ("Player Wins This Round!");
let computerWin = ("Computer Wins This Round!")
let draw = ("Its A Draw!")
let playerScore = [1];
let computerScore = [1];
let compScore = computerScore.push();
let playScore = playerScore.push();


// FUNCTION TO CHOOSE RANDOM ARRAY ITEM 
function computerPlay(){
    const randomGame = ["rock","paper","scissors"];
    let compRandom = randomGame[Math.floor(Math.random() * randomGame.length )];
    return compRandom;
}

// FUNCTION TO DISPLAY WINNER 
function oneRound (playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
    if (playerSelection == "paper" && computerSelection == "rock")
        return (playerWin + " " + playScore++);
        if (playerSelection == "rock" && computerSelection == "scissors")
        return (playerWin + " " + playScore++);
    if (playerSelection == "scissors" && computerSelection == "rock")
        return (playerWin + " " + playScore++);
    if ( computerSelection == playerSelection)
    return (draw);
    if(compScore === 5)
    return ("the winner is the computer with " + " " + compScore + " points ")
    if (playScore === 5)
    return("the winner is the player with " + " " + playScore + " points ");
    else 
        return (computerWin + " " + compScore++);

}

// function to loop multiple rounds
function Game(){
    for (i = 0; i < 20; i++)
return(oneRound());

}

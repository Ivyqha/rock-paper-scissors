function getComputerChoice() {

        let option = ["Rock", "Paper", "Scissors"]; 
        let choice = option[Math.floor(Math.random()*option.length)];
        console.log (choice)
        return(choice);
        
}

function game () {

function playRound (playerSelection, computerSelection) {
    
    
         if (playerSelection === "Rock" && computerSelection === "Scissors") {
            userScore++; 
            return ("You win! Rock beats Scissors");
         } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            userScore++ 
            return ("You win! Scissors beats Paper");
         } else if (playerSelection === "Paper" && computerSelection === "Rock"){
            userScore++ 
            return ("You win! Paper beats Rock");
         } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerSCore++ 
            return ("You lose! Rock beats Scissors");
         } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++
            return ("You lose! Scissors beats Paper");
         } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++ 
            return ("You lose! Paper beats Rock");
         } else {
             return ("It's a tie!");
         }

    } 

    let userScore = parseInt (0); 
    let computerScore = parseInt (0); 
    let win = "Winner, Winner, Chicken Dinner!";
    let lose = "Loser, Loser, Now Who's Dinner? ";
    let tie = "It's a tie!";

    for (let i=0; i <= 5; i++) {
         

    let choice = prompt("Enter your choice");
    let playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase(); 
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection ));
    console.log("Your score = " + userScore); 
    console.log("Computer's score = " + computerScore);

    }

    if (userScore > computerScore) { 
        return win;
    } else if (userScore < computerScore) { 
        return lose; 
    } else { 
        return tie;
    }
}  

console.log(game());
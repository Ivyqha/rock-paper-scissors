// creating a random generator of rock, paper, scissors 

function getComputerChoice() {

        let option = ["Rock", "Paper", "Scissors"]; 
        let choice = option[Math.floor(Math.random()*option.length)];
        console.log (choice)
        return(choice);
}


function game () {

    // creating win/lose outcomes

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

    // creating the scoreboard, using a loop for up to 5 rounds 

    let userScore = parseInt (0); 
    let computerScore = parseInt (0); 
    let win = "Winner, Winner, Chicken Dinner!";
    let lose = "Loser, Loser, Now Who's Dinner? ";
    let tie = "No winner or loser! It's a tie!";

    for (let i=0; i <= 5; i++) {
         
        let choice = prompt("Enter your choice");
        let playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase(); 
        let computerSelection = getComputerChoice();

    //updating results of each round as the game goes on 

        console.log(playRound(playerSelection, computerSelection ));
        console.log("Your score = " + userScore); 
        console.log("Computer's score = " + computerScore);

    }

    // end results of who is the winner or loser 

    if (userScore > computerScore) { 
        return win;
    } else if (userScore < computerScore) { 
        return lose; 
    } else { 
        return tie;
    }
}  

console.log(game());


function getComputerChoice() {

        let option = ["Rock", "Paper", "Scissors"]; 
        let choice = option[Math.floor(Math.random()*option.length)];
        console.log (choice)
        return(choice);
        
}


function playRound (playerSelection, computerSelection) {
    
    
         if (playerSelection === "Rock" && computerSelection === "Scissors") {
             return ("You win! Rock beats Scissors");
         } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
             return ("You win! Scissors beats Paper");
         } else if (playerSelection === "Paper" && computerSelection === "Rock"){
             return ("You win! Paper beats Rock");
         } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
             return ("You lose! Rock beats Scissors");
         } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
             return ("You lose! Scissors beats Paper");
         } else if (playerSelection === "Rock" && computerSelection === "Paper") {
             return ("You lose! Paper beats Rock");
         } else {
             return ("It's a tie!");
         }

    } 

    let choice = prompt("Enter your choice");
    let playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase(); 
    let computerSelection = getComputerChoice();


     console.log(playRound(playerSelection, computerSelection ));

     /* function game () {

        for (let i=0; i <= 5; i++) {
    
            n
         
        }
        */
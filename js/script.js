function getComputerChoice() {

        let option = ['Rock', 'Paper', "Scissors"]; 
        let choice = option[Math.floor(Math.random()*option.length)];
        return("The computer chose: " + choice);
}

 function playRound (playerSelection, computerSelection) {
    

         if (playerSelection === "Rock" && computerSelection === "Scissors") {
             return ("You win! Rock beats Scissors");
         } if (playerSelection === "Scissors" && computerSelection === "Paper") {
             return ("You win! Scissors beats Paper");
         } if (playerSelection === "Paper" && computerSelection === "Rock"){
             return ("You win! Paper beats Rock");
         } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
             return ("You lose! Rock beats Scissors");
         } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
             return ("You lose! Scissors beats Paper");
         } else if (playerSelection === "Rock" && computerSelection === "Paper") {
             return ("You lose! Paper beats Rock");
         } else {
            return ("It's a tie!")
         }
            
    }
 
  const playerSelection = "Paper"; 
  const computerSelection = getComputerChoice (); 

  console.log(playRound(playerSelection, computerSelection));

  

/*if (computerSelection = "Paper") {
                  return ("You lose! Paper beats Rock");
            } else if (computerSelection = "Scissors") { 
                  return ("You win! Rock beats Scissors");
            } else { 
                  return ("It's a tie!");
         }

         */ 



/* var option = prompt("What will you choose?"); 
    var choice = ['Rock', 'Paper', 'Scissors']*/ 



/* 
- Player INPUTS choice - either rock, paper and scissors 

- Computer returns choice - either rock, paper and scissors 

- IF player input is rock 

   and computer returns choice paper OR scissors,
  
  RETURNS "You win!"

  ELSE "You Lose!"

*/ 
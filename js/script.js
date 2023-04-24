// creating a random generator of rock, paper, scissors 

function getComputerChoice() {

        let option = ["Rock", "Paper", "Scissors"]; 
        let choice = option[Math.floor(Math.random()*option.length)];
        console.log (choice)
        return(choice);
}

const restartBtn = document.getElementById ("restartBtn");

// creating win/lose outcomes
let userScore = 0; 
let computerScore = 0; 

function playRound (playerSelection, computerSelection) {
    
         if (playerSelection === "Rock" && computerSelection === "Scissors") {
            userScore++;
            document.getElementById("outcome").textContent = "You win! The computer chose Scissors. Rock beats Scissors";
         } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            userScore++;
            document.getElementById("outcome").textContent = "You win! The computer chose Paper. Scissors beats Paper";
         } else if (playerSelection === "Paper" && computerSelection === "Rock"){
            userScore++;
            document.getElementById("outcome").textContent = "You win! The computer chose Rock. Paper beats Rock";
         } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            document.getElementById("outcome").textContent = "You lose! The computer chose Rock. Rock beats Scissors";
         } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            document.getElementById("outcome").textContent = "You lose! The computer chose Scissors. Scissors beats Paper";
         } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++;
            document.getElementById("outcome").textContent = "You lose! The computer chose Paper. Paper beats Rock";
         } else {
            document.getElementById("outcome").textContent = "It's a tie!";
         }
    } 

// creating function for each rock paper scissors button 
let buttons = document.querySelectorAll("button");
let result = document.querySelector("#results");

function game () {
    buttons.forEach((button) => { 
        button.addEventListener("click", function (e) {

            const targetScore = 5; 
            let gameOver = false; 
        
            // play the game when point score is left than 5 points. Stop game when the winner has been found
            if(userScore!=5 && computerScore!=5){

                const userScores = document.getElementById("userScore");
                const computerScores = document.getElementById("computerScore");
                const playerSelection = this.id;
                const computerSelection = getComputerChoice (); 
                result.textContent = playRound(playerSelection, computerSelection);

            // Release statement of who is the winner when 5 points (end of game) has been reached 
            if(userScore == 5) {
                document.getElementById("outcome").textContent = "Winner Winner, Chicken Dinner!"; 
                gameOver = true;
                restartBtn.style.display = "inline";
            }
            if(computerScore == 5) {
                document.getElementById("outcome").textContent = "Loser Loser, Now Who's Dinner?"; 
                gameOver = true;
                restartBtn.style.display = "inline";
            }

            // update and display scoreboard 
            userScores.textContent = `You: ${userScore}`;
            computerScores.textContent = `Computer: ${computerScore}`;
                
            }
        }
        )
    }
    )
}

    
// creating a restart button 

/* const restartBtn = document.getElementById ("restartBtn"); 

restartBtn.addEventListener = ("click", () => { 
    location.reload ();
    restartBtn.style.display = "block"; 
}); */


game();

function reset () { 
    userScore = 0; 
    computerScore = 0; 
    location.reload () 

}

restartBtn.addEventListener("click", function() { 
    reset ();
    game ();
}); 


// notes on what to do:
// add restart button  
// edit UI of the website 



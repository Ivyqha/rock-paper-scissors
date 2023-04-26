// creating a random generator of rock, paper, scissors 

function getComputerChoice() {

        let option = ["Rock", "Paper", "Scissors"]; 
        let choice = option[Math.floor(Math.random()*option.length)];
        console.log (choice)
        return(choice);
}


// creating win/lose outcomes
let userScore = 0; 
let computerScore = 0; 

function playRound (playerSelection, computerSelection) {
    
         if (playerSelection === "Rock" && computerSelection === "Scissors") {
            userScore++;
            document.getElementById("outcome").textContent = "1 point for you! The computer chose Scissors. Rock beats Scissors";
         } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            userScore++;
            document.getElementById("outcome").textContent = "1 point for you! The computer chose Paper. Scissors beats Paper";
         } else if (playerSelection === "Paper" && computerSelection === "Rock"){
            userScore++;
            document.getElementById("outcome").textContent = "1 point for you! The computer chose Rock. Paper beats Rock";
         } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            document.getElementById("outcome").textContent = "No point! The computer chose Rock. Rock beats Scissors";
         } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            document.getElementById("outcome").textContent = "No point! The computer chose Scissors. Scissors beats Paper";
         } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++;
            document.getElementById("outcome").textContent = "No point! The computer chose Paper. Paper beats Rock";
         } else {
            document.getElementById("outcome").textContent = "No one scores a point! You chose the same";
         }
    } 

// creating function for each rock paper scissors button 
let buttonsId = ["Rock", "Scissors", "Paper"];
let result = document.querySelector("#results");

const restartBtn = document.getElementById ("restartBtn");
const startBtn = document.getElementById ("startBtn"); 

function game () {
    buttonsId.forEach(id => { 
        const button = document.getElementById (id); 
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
                
                buttonsId.forEach(id => { 
                    const button = document.getElementById (id);   
                    button.style.display = "none"; 
                
                });      
                restartBtn.style.display = "block";
            }
            if(computerScore == 5) {
                document.getElementById("outcome").textContent = "Loser Loser, Now Who's Dinner?"; 
                gameOver = true;
                
                
                buttonsId.forEach(id => { 
                    const button = document.getElementById (id);   
                    button.style.display = "none"; 
                
                });  
                restartBtn.style.display = "block";
            }

            // update and display scoreboard 
            userScores.textContent = `You: ${userScore} points` ;
            computerScores.textContent = `Computer: ${computerScore} points`;
           
            }
        }
        )
    }
    )
};

//creating colour changing mouseover for each button 

const startBtnHover = document.getElementById ("startBtn"); 
    startBtnHover.addEventListener("mouseover", function () { 
        startBtnHover.style.backgroundColor = "white" ;
        startBtnHover.style.color = "rgb(255, 132, 25)"
    }); 

    startBtnHover.addEventListener("mouseout", function () { 
        startBtnHover.style.backgroundColor = "rgb(255, 132, 25)" ;
        startBtnHover.style.color = "white"; 
    }); 

const restartBtnHover = document.getElementById ("restartBtn"); 
    restartBtnHover.addEventListener("mouseover", function () { 
        restartBtnHover.style.backgroundColor = "rgb(255, 250, 250)"; 
        restartBtnHover.style.color = "rgb(0, 112, 143)"; 
    });

    restartBtnHover.addEventListener("mouseout", function () { 
        restartBtnHover.style.backgroundColor = "rgb(0, 112, 143)"; 
        restartBtnHover.style.color = "rgb(255, 250, 250)"; 
    });

    buttonsId.forEach (id => {
        const RockPaperScissors = document.getElementById (id); 
            RockPaperScissors.addEventListener("mouseover", function () {
                RockPaperScissors.style.backgroundColor = "rgb(255, 132, 25)"; 
                RockPaperScissors.style.color = "rgb(255, 250, 250)"; 
        });
            RockPaperScissors.addEventListener("mouseout", function () {
                RockPaperScissors.style.backgroundColor = "rgb(255, 250, 250)"; 
                RockPaperScissors.style.color = "rgb(255, 132, 25)"; 
        });
    }); 
//creating start button with an event, so it disappears after its pressed. 

startBtn.addEventListener("click", function () { 
    game (); 
    buttonsId.forEach(id => { 
        const button = document.getElementById (id); 
        button.style.display= "inline"; 
    });

    startBtn.style.display = "none";

    let scoreBoard = ["userScore", "computerScore"]; 
        scoreBoard.forEach(id => { 
        const score = document.getElementById (id);
        score.style.display = "inline";  
        });
}); 

//creating a restart button so it refreshes the game 

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

//create hover motion over choice buttons 
//replace playbuttons with restart button when the game is over 
// edit UI of the website 



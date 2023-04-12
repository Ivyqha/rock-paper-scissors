function getComputerChoice() {

   var option = ['Rock', 'Paper', "Scissors"]; 
   var choice = option[Math.floor(Math.random()*option.length)];
   return("The computer chose: " + choice);
    
}

console.log(getComputerChoice());
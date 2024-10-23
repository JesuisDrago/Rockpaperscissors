//console.log("Hello World")

function getComputerChoice(){
    let y = Math.random();
    if (y >= 0 && y < 0.33){
        return "rock";
    } else if( y >= 0.33 && y < 0.66){
        return "paper";
    } else return "scissors";
    
}

function getHumanChoice(){
   return HumanAnswer = prompt("What are you picking now? Rock, Paper or Scissors.").toLowerCase();
}

function playRound(HumanChoice, ComputerChoice){
    if (HumanChoice === "rock"){
        if (ComputerChoice === "paper"){
            return "You lose. Paper beats Rock!";
        }else if (ComputerChoice === "rock"){
            return " It's a tie.";
        } else return "You win. Rock beats Scissors.";
    }
    if (HumanChoice === "paper"){
        if (ComputerChoice === "scissors"){
            return "You lose. Scissors beats Paper!";
        }else if (ComputerChoice === "paper"){
            return " It's a tie.";
        } else return "You win. Paper beats Rock.";
    }
    if (HumanChoice === "scissors"){
        if (ComputerChoice === "paper"){
            return "You win. Scissors beats paper.";
        }else if (ComputerChoice === "rock"){
            return "You lose. Rock beats Scissors.";
        } else return "It's a tie.";
    }

}

let humanScore = 0;
let computerScore = 0;

let roundsNumber = parseInt(prompt("How many rounds do you want to play?"));
console.log("Human ", humanScore, " vs ", computerScore, " Computer");
for ( let i=1; i <= roundsNumber; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    console.log(result);
    
    result = result.slice(0, 7);
    if (result === "You win"){
        humanScore ++;
    }else if(result == "You los"){
        computerScore ++;
    }

    console.log("Human ", humanScore, " vs ", computerScore, " Computer");
}
    if(parseInt(humanScore) > parseInt(computerScore)){
        alert("You won! But your luck won't last forever.");
    }else if(parseInt(humanScore) < parseInt(computerScore)){
        alert("Better luck next time, loser.")
    }else alert("Tie... double or nothing?");


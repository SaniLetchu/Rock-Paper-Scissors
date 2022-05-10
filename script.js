function computerPlay() {
    let randomnumber = Math.floor(Math.random() * 3);
    if(randomnumber == 0) {
        return "Scissors";
    }
    else if(randomnumber == 1) {
        return "Rock";
    }
    else {
        return "Paper";
    }
}   

function playRound(playerSelection, computerSelection) {
    function win(player, computer) {
        return `You Win! ${player} beats ${computer}`;
    }
    function lose(player, computer) {
        return `You Lose! ${computer} beats ${player}`;
    }
    let playerchoice = playerSelection.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    if(playerchoice == computerSelection) {
        return "Draw!";
    }
    if(playerchoice == "Rock") {
        if(computerSelection == "Scissors") {
            return win(playerchoice, computerSelection);
        }
        else {
            return lose(playerchoice, computerSelection);
        }
    }
    else if(playerchoice == "Scissors") {
        if(computerSelection == "Paper") {
            return win(playerchoice, computerSelection);
        }
        else {
            return lose(playerchoice, computerSelection);
        }
    }
    else if(playerchoice == "Paper") {
        if(computerSelection == "Rock") {
            return win(playerchoice, computerSelection);
        }
        else {
            return lose(playerchoice, computerSelection);
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
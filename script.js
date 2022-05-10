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
        return [`You Win! ${player} beats ${computer}`, 1];
    }
    function lose(player, computer) {
        return [`You Lose! ${computer} beats ${player}`, 0];
    }
    let playerchoice = playerSelection.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    if(playerchoice == computerSelection) {
        return ["Draw!", 2];
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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerinput = window.prompt("Enter Rock Paper or Scissors");
        let roundResult = playRound(playerinput, computerPlay());
        console.log(roundResult[0]);
     }
}
game();
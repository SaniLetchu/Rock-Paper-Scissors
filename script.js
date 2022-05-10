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

console.log(computerPlay());
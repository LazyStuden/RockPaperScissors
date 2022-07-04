function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    const outcome ={
        0: "rock",
        1: "paper",
        2: "scissors",
    };
    return outcome[rand];
}


function play(playerSelection, computerSelection){

    console.log(computerSelection);

    playerSelection.toLowerCase();
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win! Rock beats Scissors';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper beats Rock';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win! Scissors beats Paper';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You Lose! Rock beats Scissors';
    }
    else if(playerSelection === computerSelection){
        return 'DRAW!';
    }
    else{
        return 'Enter correct input!';
    }
}
for(let i=0; i<5; i++){

    let playerInput = prompt("Enter rock, paper or scissors");
    console.log(play(playerInput, computerPlay()));
}

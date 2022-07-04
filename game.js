function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    const outcome ={
        0: "rock",
        1: "paper",
        2: "scissors",
    };
    return outcome[rand];
}

let score = 0;

function play(playerSelection, computerSelection){

    console.log(computerSelection);

    playerSelection.toLowerCase();
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        score++;
        return 'You Win! Rock beats Scissors';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        score++;
        return 'You Win! Paper beats Rock';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        score++;
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

const container = document.querySelector('.second');

function display(playerInput){
    const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = play(playerInput, computerPlay());
    container.appendChild(message);
    if(score === 5){
        alert('You won!');
    }
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => display(button.id))
});
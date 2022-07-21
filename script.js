// alert("It's Linked!");

let userChoice;
let compChoice;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const divResult = document.querySelector('.div2');
let compScore = 0;
let userScore = 0;
let totalGames = 0;

let playGame = () => { 
    getComputerChoice();
    playRound();
    gameOver();
};
//Buttons get users choice and creates a computer choice
    rockButton.addEventListener('click', () => {
        userChoice = 'rock';
        playGame();
        // console.log(userChoice);
        // console.log(compChoice);
    });

    paperButton.addEventListener('click', () => {
        userChoice = 'paper';
        playGame();
        
        // console.log(userChoice);
        // console.log(compChoice);
    });

    scissorButton.addEventListener('click', () => {
        userChoice = 'scissor';
        playGame();

        // console.log(userChoice);
        // console.log(compChoice);
    });


function getComputerChoice () { 
//console.log('getComputerChoice Funciton Ran');

//userChoice = prompt ("Chose rock, paper, or scissors. Don't put something like Lazer guns... thats cheating.");


    let rndNumber = Math.round(Math.random()*2);
// console.log(rndNumber);

//Computers choice is off of a random number
    switch (rndNumber) {
        case 0:
// alert('0');
            compChoice = 'rock';
            break;
        case 1:
// alert('1');
            compChoice = 'paper';
            break;
        case 2:
// alert('2');
            compChoice = 'scissor';
            break;
        default:
            alert('Error w/ getComputerChoice');
    }
}

// getComputerChoice();

function playRound () { 
//   console.log('playRound Function');
   
//const div = document.querySelector('div');
//const computerWins = document.createElement

//userChoice = userChoice.toLowerCase();

    if (userChoice == compChoice) { 
//console.log("Tie!");
        const tieText = document.createTextNode('Its a Tie!');
        divResult.appendChild(tieText);

        return "It is a tie!";
    
    } else if ((userChoice == 'rock' && compChoice == 'scissor') || (userChoice == 'scissor' && compChoice == 'paper') || (userChoice == 'paper' && compChoice == 'rock')) {
//console.log("User wins!");
        const userWins = document.createTextNode('Congradulations, you win!');
        divResult.appendChild(userWins);
        userScore += 1;
        return "User won this round";
        
    } else if ((userChoice == 'scissor' && compChoice == 'rock') || (userChoice == 'paper' && compChoice == 'scissor') || (userChoice == 'rock' && compChoice == 'paper')) {
//console.log("Computer wins!");
        const compWins = document.createTextNode('Computer wins!');
        divResult.appendChild(compWins);
        compScore += 1;
        return "Computer won this round";
    }
};

function gameOver () { 
    console.log('gameOver');
    if (userScore == 5 || compScore == 5) {
    const endGame = document.createTextNode('--- --- --- Game is over --- --- ---');
    divResult.appendChild(endGame);

    // rockButton.removeChild()
    // paperButton.removeEventListener();
    // scissorButton.removeEventListener();
}};
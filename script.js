// alert("It's Linked!");

let userChoice;
let compChoice;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', () => {
    userChoice = 'rock';
//console.log(userChoice);
    playRound();
});

paperButton.addEventListener('click', () => {
    userChoice = 'paper';
//console.log(userChoice);
    playRound();
});

rockButton.addEventListener('click', () => {
    userChoice = 'rock';
//console.log(userChoice);
    playRound();
});


function getComputerChoice () { console.log('getComputerChoice Funciton Ran');

    userChoice = prompt ("Chose rock, paper, or scissors. Don't put something like Lazer guns... thats cheating.");


    let rndNumber = Math.round(Math.random()*2);
// console.log(rndNumber);
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

function playRound () { console.log('playRound Function');
   
    const div = document.querySelector('div');
                                                              const computerWins = document.createElement

//userChoice = userChoice.toLowerCase();

    if (userChoice == compChoice) {
        return "It is a tie!";
    } else if ((userChoice == 'rock' && compChoice == 'scissor') || (userChoice == 'scissor' && compChoice == 'paper') || (userChoice == 'paper' && compChoice == 'rock')) {
// alert("User wins!");
        return "Congratulations, you win!";
        
    } else if ((userChoice == 'scissor' && compChoice == 'rock') || (userChoice == 'paper' && compChoice == 'scissor') || (userChoice == 'rock' && compChoice == 'paper')) {
// alert("Computer wins!");
        return "Computer wins!";
    } else if (userChoice == 'lazer guns') {
        return "Funny... you win";
    } else {
// alert("You only have 3ish choices. Rock, paper, etc...");
        return "You only have 3ish choices. Rock, paper, etc...";
    }
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(getComputerChoice());
//         console.log(playRound());
//     }
// }

// game();
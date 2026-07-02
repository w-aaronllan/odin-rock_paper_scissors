/* 
PSEUDOCODE
1. Create a function to get computer move 
2. Create function to get human move
3. Declare score
4. Write logic to play a single round
5. Show winner
6. Increment score
*/

function getComputerChoice(){
    const choiceNum = Math.floor(Math.random() * 3);
    /* math.random returns number from 0-1 split into 3*/
    let choiceWord = '';
    if(choiceNum === 0){
        choiceWord = 'Rock';
    }
    else if(choiceNum === 1){
        choiceWord = 'Paper';
    }
    else{
        choiceWord = 'Scissors';
    }
    return choiceWord.toUpperCase();
    
}

function getHumanChoice(){
    let choiceWord = prompt('Enter your move: ');
    return choiceWord.toUpperCase();
}

function playGame(human, computer){
    console.log(`Your move is : ${human}`);
    console.log(`Computer move is : ${computer}`);

    if(human === computer){
        result = 'TIE';
    }
    else if(human === 'ROCK'){
        if(computer === 'PAPER'){
            result = 'LOSE';
        }
        else if(computer === 'SCISSORS'){
            result = 'WIN';
        }
    }
    else if(human === 'PAPER'){
        if(computer === 'SCISSORS'){
            result = 'LOSE';
        }
        else if(computer === 'ROCK'){
            result = 'WIN';
        }
    }
    else if(human === 'SCISSORS'){
       if(computer === 'ROCK'){
            result = 'LOSE';
        }
        else if(computer === 'PAPER'){
            result = 'WIN';
        }
    }

    updateScore(result);
}

function updateScore(result){
    if(result === 'WIN'){
        humanScore += 1;
    }

    else if(result === 'LOSE'){
        computerScore += 1;
    }
    else if(result === 'TIE'){
        tieScore += 1;
    }
    showScore();
}

function showScore(){
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Tie: ${tieScore}`);
}


let result = '';
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

for(let i = 0; i < 5; i++){
    const human = getHumanChoice();
    const computer = getComputerChoice();
    playGame(human, computer);
}

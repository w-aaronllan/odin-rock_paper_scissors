/* 
PSEUDOCODE
1. Create a function to get computer move 
2. Create function to get human move
3. Declare score
4. Write logic to play a single round
5. Show winner
6. Increment score
*/

let humanScore = 0;
let computerScore = 0;

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
    return choiceWord;
    
}

function getHumanChoice(){
    let choiceWord = prompt('Enter your move: ');
    return choiceWord;
}

function playGame(human, computer){
    console.log(`Your move is : ${human}`);
    console.log(`Computer move is : ${computer}`);
}

playGame(getHumanChoice(), getComputerChoice());

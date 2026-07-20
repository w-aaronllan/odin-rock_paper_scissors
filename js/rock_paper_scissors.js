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
    const revertBGColor = "black";
    const updateBGColor = "white";
    const paper = document.querySelector("#paperComputer");
    const scissors = document.querySelector("#scissorsComputer");
    const rock = document.querySelector("#rockComputer");

    if(choiceNum === 0){
        choiceWord = 'rock';
        rock.style.backgroundColor = updateBGColor;
        paper.style.backgroundColor = revertBGColor;
        scissors.style.backgroundColor = revertBGColor;
    }
    else if(choiceNum === 1){
        choiceWord = 'paper';
        rock.style.backgroundColor = revertBGColor;
        paper.style.backgroundColor = updateBGColor;
        scissors.style.backgroundColor = revertBGColor;
    }
    else{
        choiceWord = 'scissors';
        rock.style.backgroundColor = revertBGColor;
        paper.style.backgroundColor = revertBGColor;
        scissors.style.backgroundColor = updateBGColor;
    }
    computer = choiceWord;
}

function getHumanChoice(){
    const moves = document.querySelectorAll(".userMove");
    const score = document.querySelector("#human");
    moves.forEach((value) => {
        value.addEventListener("click", () => {
            const revertBGColor = "black";
            const paper = document.querySelector("#paper");
            const scissors = document.querySelector("#scissors");
            const rock = document.querySelector("#rock");

            value.style.backgroundColor = "white";

            if(value.id === "rock"){
                paper.style.backgroundColor = revertBGColor;
                scissors.style.backgroundColor = revertBGColor;
            }
            else if(value.id === "paper"){
                rock.style.backgroundColor = revertBGColor;
                scissors.style.backgroundColor = revertBGColor;
            }
            else if(value.id === "scissors"){
                paper.style.backgroundColor = revertBGColor;
                rock.style.backgroundColor = revertBGColor;
            }
            human = value.id;
        })
    });
}

function playGame(human, computer){
    human = human.toUpperCase();
    computer = computer.toUpperCase();
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
    showScore(result);
}

function showScore(result){
    const score = document.querySelector("#score");
    const addElementHScore = document.createElement("h2");
    const addElementCScore = document.createElement("h2");
    const addElementTScore = document.createElement("h2");
    const resultElement = document.createElement("h2");

    addElementHScore.innerText = `Your score: ${humanScore}`;
    addElementCScore.innerText = `Computer score: ${computerScore}`;
    addElementTScore.innerText = `Tie: ${tieScore}`;
    resultElement.innerText = `You ${result}`;
    
    score.textContent = "";
    score.appendChild(resultElement);
    score.appendChild(addElementHScore);
    score.appendChild(addElementCScore);
    score.appendChild(addElementTScore);

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Tie: ${tieScore}`);
}


let result = '';
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

// for(let i = 0; i < 5; i++){
//     const human = getHumanChoice();
//     const computer = getComputerChoice();
//     playGame(human, computer);
// }

let human = "";
getHumanChoice();
let computer = "";

const play = document.querySelector(".play");
play.addEventListener("click", () => 
    {

        getComputerChoice();
        playGame(human, computer);
    }
);


// playGame(human, computer);
// console.log(score);
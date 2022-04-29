

const array = ['rock', 'paper', 'scissors']

function computerPlay() {
   let randomIndex = Math.floor(Math.random() * array.length);
   console.log(array[randomIndex]);
   return array[randomIndex]
}

const loseMessage = "You're lose"
const winMessage = "You're win"
let score = 0

function playRound(playerSelection, computerSelection) {
   // your code here!
   if (playerSelection === computerSelection) {
      return "Draw";
   } else if (
      playerSelection === "rock" && computerSelection === "paper" ||
      playerSelection === "scissors" && computerSelection === "rock" ||
      playerSelection === "paper" && computerSelection === "scissors"
      ) {
         score--
      return loseMessage;
   } else {
      score++
      return winMessage;
   }
 }

 const playerSelection = "rock";
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));


function game() {
   for (let i = 0; i < 5; i++) {
      playRound()
      console.log(`Your score is ${score}`);
   }
}

game()
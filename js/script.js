
const array = ["Rock", "Paper", "Scissors"]


function computerPlay() {
   const random1 = Math.floor(Math.random() * array.length);
   //console.log(array[random1])
   return array[random1]
}
//computerPlay()

function playRound(playerSelection, computerSelection) {
   // your code here!
   // if (playerSelection === "Rock" && computerSelection === "Paper") {
   //    console.log("You lose!");
   // }  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
   //    console.log("You win!!!");
   // } else if (playerSelection === "Rock" && computerSelection === "Rock") {
   //    console.log("Play again");
   // } else if (playerSelection === "Paper" && computerSelection === "Rock") {
   //    console.log("You win!!!");
   // } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
   //    console.log("You lose!");
   // } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
   //    console.log("Play again");
   // } else if (playerSelection === "Paper" && computerSelection === "Paper") {

   // } else if (playerSelection === "Paper" && computerSelection === "Paper") {

   // }

   if (playerSelection === "Rock") {
      
   }

 }



 const playerSelection = "Rock";
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));


 function game() {
    for (let i = 0; i < 5; i++) {

    };
 }

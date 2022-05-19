// assigning variables using event lisener to trigger "run" function on click event for choice buttons
var Rock = document.getElementById('Rock').addEventListener('click', run);
var Paper = document.getElementById('Paper').addEventListener('click', run);
var Scissors = document.getElementById('Scissors').addEventListener('click', run);

// Establishing variables for the comparison function
var computerChoice;
var playerChoice;

// establishing variables that will dynamically populate HTML based on game circumstances and outcome
var player = document.getElementById('player');
var computer = document.getElementById('computer');
var outcome = document.getElementById('outcome');

// run function establishes player and computer choices and then compares them
function run() {
  	playerChoice = this.innerText;
  	computerGamble();
  	compare();
}

// function that randomly generates value between 0 and 1 and then conditionally assigns them to a choice
function computerGamble() {
  	var dice = Math.random();
	if (dice <= 0.33) {
		computerChoice = "Rock";
    } else if (dice > 0.33 && dice <= 0.66) {
    	computerChoice = "Paper";
    } else {
    	computerChoice = "Scissors";
    }
 }

// function that takes input of user and computer choices and then presents outcome based off conditional logic
 function compare() {
 	player.innerHTML = "You have chosen " + playerChoice;
 	computer.innerHTML = "Computer chooses " + computerChoice;

 	if (playerChoice == computerChoice) {
 		outcome.innerHTML = "Stalemate";
 		
 	} else if (playerChoice === "Rock" && computerChoice === "Paper") {
 		outcome.innerHTML = "Defeat!";
 	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
 		outcome.innerHTML = "Victory!";
 	

 	} else if (playerChoice === "Paper" && computerChoice === "Rock") {
 		outcome.innerHTML = "Victory!";
 	} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
 		outcome.innerHTML = "Defeat!";


 	} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
 		outcome.innerHTML = "Defeat!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
 		outcome.innerHTML = "Victory!";
 	}
 }

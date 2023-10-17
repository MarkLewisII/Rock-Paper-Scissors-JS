var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3) + 1;

	if (computerChoice == 1) {
		return "rock";
	} else if (computerChoice == 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	let outcome = document.querySelector(".result");

	if (playerSelection == computerSelection) {
		// console.log("Draw");
		outcome.textContent = `Draw`;
	}

	if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "rock")
	) {
		// console.log(
		// 	"You Lose! " + computerSelection + " beats " + playerSelection
		// );
		outcome.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;

		computerScore++;
	}

	if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
		// console.log(
		// 	"You Win! " + playerSelection + " beats " + computerSelection
		// );
		outcome.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;

		playerScore++;
	}

	UpdateScoreboard(playerScore, computerScore);
}

function UpdateScoreboard(playerScore, computerScore) {
	document.getElementById(
		"playerScore"
	).textContent = `Player : ${playerScore}`;
	document.getElementById(
		"computerScore"
	).textContent = `Computer : ${computerScore}`;

	EndScreen(playerScore, computerScore);
}

function EndScreen(playerScore, computerScore) {
	let finalResult = document.getElementById("winner");

	if (playerScore >= 5) {
		finalResult.textContent = "Player Wins!";
		Reset();
		
	} else if (computerScore >= 5) {
		finalResult.textContent = "Computer Wins!";
		Reset();
	}
}

function Reset() {
	document.getElementById('rockBttn').disabled = true;
	document.getElementById('paperBttn').disabled = true;
	document.getElementById('scissorBttn').disbled = true;

	let resetBttn = document.createElement('button');

	resetBttn.textContent = "Reset";
	resetBttn.id = "resetBttn";

	resetBttn.onclick = () =>
	{
		let self = document.getElementById('resetBttn');

		playerScore = 0;
		computerScore = 0;

		document.getElementById("rockBttn").disabled = false;
		document.getElementById("paperBttn").disabled = false;
		document.getElementById("scissorBttn").disbled = false;
		
		self.parentNode.removeChild('resetBttn');
		}
}
// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		const playerSelection = prompt(
// 			"Enter your move. (rock, paper, scissors"
// 		);
// 		const computerSelection = getComputerChoice();

// 		playRound(playerSelection, computerSelection);
// 	}
// }

// game();

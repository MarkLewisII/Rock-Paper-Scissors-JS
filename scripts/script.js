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
	let outcome = document.querySelector('.result');

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

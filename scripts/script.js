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

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		console.log("Draw");
	}

	if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "rock")
	) {
		console.log(
			"You Lose! " + computerSelection + " beats " + playerSelection
		);
	}

	if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
		console.log(
			"You Win! " + playerSelection + " beats " + computerSelection
		);
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt(
			"Enter your move. (rock, paper, scissors"
		);
		const computerSelection = getComputerChoice();

		// playerSelection = prompt("Enter your move. (rock, paper, scissors");
		playRound(playerSelection, computerSelection);
	}
}

game();

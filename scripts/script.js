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
		outcome.textContent = `Draw`;
	}

	if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "rock")
	) {
		outcome.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;

		computerScore++;
	}

	if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
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
	const finalResult = document.getElementById("winner");

	if (playerScore >= 5) {
		prompt("Player Wins!");
		window.location.reload();
		// Reset();
	} else if (computerScore >= 5) {
		prompt("Computer Wins!");
		window.location.reload();
		// Reset();
	}
}

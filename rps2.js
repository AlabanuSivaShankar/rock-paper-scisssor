 // Initialize score object
 let score = {
    wins: 0,
    losses: 0,
    tie: 0
};

// Retrieve score from local storage if available
const storedScore = JSON.parse(localStorage.getItem('score'));
if (storedScore) {
    score = storedScore;
    updateScoreboard(score);
}

// Function to update the scoreboard
function updateScoreboard(score) {
    document.getElementById('wins').textContent = score.wins;
    document.getElementById('losses').textContent = score.losses;
    document.getElementById('ties').textContent = score.tie;
}

// Function to reset score
function resetScore() {
    score = { wins: 0, losses: 0, tie: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreboard(score);
}

// Function to play the game
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissor') {
        if (computerMove === 'scissor') {
            result = 'Tie';
        } else if (computerMove === 'rock') {
            result = 'You Lose';
        } else {
            result = 'You Win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissor') {
            result = 'You Lose';
        } else if (computerMove === 'rock') {
            result = 'You Win';
        } else {
            result = 'Tie';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You Lose';
        } else {
            result = 'You Win';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreboard(score);

    // Display result in console
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}

// Function to randomly pick computer move
function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        return 'paper';
    } else {
        return 'scissor'; 
    }
}

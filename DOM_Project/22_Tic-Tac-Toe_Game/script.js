const gameBoard = document.getElementById("gameBoard");
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(e) {
    const index = e.target.getAttribute("data-index");

    if (board[index] === "" && isGameActive) {
        board[index] = currentPlayer;
        e.target.classList.add(currentPlayer);
        e.target.textContent = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkForWinner() {
    let roundWon = false;

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            break;
        }
    }

    if (roundWon) {
        message.textContent = `${currentPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        message.textContent = "It's a Draw!";
        isGameActive = false;
        return;
    }

    message.textContent = `Player ${currentPlayer === "X" ? "O" : "X"}'s Turn`;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => {
        cell.textContent = "";
        cell.className = "cell";
    });
    message.textContent = "Player X's Turn";
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);









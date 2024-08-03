// script.js

const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(event) {
    const cell = event.target;
    const index = [...cells].indexOf(cell);

    if (boardState[index] !== '' || checkWin()) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
    } else if (boardState.every(cell => cell !== '')) {
        alert("It's a draw!");
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

function restartGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}

board.addEventListener('click', handleClick);
restartButton.addEventListener('click', restartGame);

const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
  const cellIndex = event.target.dataset.index;
  if (gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkWin();
    switchPlayer();
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combo of winningCombos) {
    if (gameBoard[combo[0]] === currentPlayer &&
        gameBoard[combo[1]] === currentPlayer &&
        gameBoard[combo[2]] === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
      return;
    }
  }

  if (!gameBoard.includes('')) {
    alert("It's a tie!");
    resetGame();
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}

cells.forEach((cell, index) => {
  cell.dataset.index = index;
  cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', resetGame);
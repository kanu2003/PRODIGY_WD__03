let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// main function
function handleClick(index) {
  if (gameActive && !gameBoard[index]) {
    gameBoard[index] = currentPlayer;
    document.getElementById(index).innerText = currentPlayer;
    if (checkWin() || checkDraw()) {
      gameActive = false;
      document.getElementById('status').innerText = checkWin() ? `${currentPlayer} wins!` : 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

//function for win
function checkWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningConditions.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

//function for draw
function checkDraw() {
  return !gameBoard.includes('');
}

// function for resetting the game
function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
  document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
}

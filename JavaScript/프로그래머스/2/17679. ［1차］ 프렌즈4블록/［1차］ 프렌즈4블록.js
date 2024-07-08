function solution(m, n, board) {
  const gameBoard = board.map((row) => Array.from(row));

  while (true) {
    const findBlockSet = [];
    for (let i = 0; i < m - 1; i += 1) {
      for (let j = 0; j < n - 1; j += 1) {
        const currentBlock = gameBoard[i][j];
        if (
          currentBlock &&
          currentBlock === gameBoard[i][j + 1] &&
          currentBlock === gameBoard[i + 1][j] &&
          currentBlock === gameBoard[i + 1][j + 1]
        ) {
          findBlockSet.push([i, j]);
        }
      }
    }

    if (!findBlockSet.length) return gameBoard.flat().filter((v) => !v).length;

    findBlockSet.forEach(([y, x]) => {
      gameBoard[y][x] = 0;
      gameBoard[y][x + 1] = 0;
      gameBoard[y + 1][x] = 0;
      gameBoard[y + 1][x + 1] = 0;
    });

    for (let i = m - 1; i >= 0; i -= 1) {
      for (let j = 0; j < n; j += 1) {
        for (let k = i - 1; k >= 0; k -= 1) {
          if (gameBoard[i][j]) break;

          if (gameBoard[k][j]) {
            gameBoard[i][j] = gameBoard[k][j];
            gameBoard[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let move of moves) {
    if (stack.length >= 2 && stack.at(-1) === stack.at(-2)) {
      stack.splice(-2);
      answer += 2;
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1]) {
        stack.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }
  }
  return answer;
}
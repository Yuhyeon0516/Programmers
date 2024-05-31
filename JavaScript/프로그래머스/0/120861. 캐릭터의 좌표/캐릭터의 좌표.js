function solution(keyinput, board) {
  let currentPosition = [0, 0];
  const minXposition = Math.floor(board[0] / 2) * -1;
  const maxXPosition = board[0] + minXposition;
  const minYposition = Math.floor(board[1] / 2) * -1;
  const maxYPosition = board[1] + minYposition;

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "left":
        if (currentPosition[0] - 1 >= minXposition) {
          currentPosition[0] -= 1;
        }
        break;
      case "right":
        if (currentPosition[0] + 1 < maxXPosition) {
          currentPosition[0] += 1;
        }
        break;
      case "up":
        if (currentPosition[1] + 1 < maxYPosition) {
          currentPosition[1] += 1;
        }
        break;

      default:
        if (currentPosition[1] - 1 >= minYposition) {
          currentPosition[1] -= 1;
        }
        break;
    }
  }
  return currentPosition;
}
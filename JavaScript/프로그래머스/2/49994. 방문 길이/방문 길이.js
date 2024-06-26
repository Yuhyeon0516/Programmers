function solution(dirs) {
  let answer = new Set();
  let position = [0, 0];

  for (let dir of dirs) {
    const [x, y] = position;
    switch (dir) {
      case "U":
        if (y + 1 <= 5) {
          answer.add(`${x}${y}${x}${y + 1}`);
          answer.add(`${x}${y + 1}${x}${y}`);
          position = [x, y + 1];
        }
        break;
      case "D":
        if (y - 1 >= -5) {
          answer.add(`${x}${y}${x}${y - 1}`);
          answer.add(`${x}${y - 1}${x}${y}`);
          position = [x, y - 1];
        }
        break;
      case "R":
        if (x + 1 <= 5) {
          answer.add(`${x}${y}${x + 1}${y}`);
          answer.add(`${x + 1}${y}${x}${y}`);
          position = [x + 1, y];
        }
        break;

      case "L":
        if (x - 1 >= -5) {
          answer.add(`${x}${y}${x - 1}${y}`);
          answer.add(`${x - 1}${y}${x}${y}`);
          position = [x - 1, y];
        }
        break;
    }
  }

  return answer.size / 2;
}
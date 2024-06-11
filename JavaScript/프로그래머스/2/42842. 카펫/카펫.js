function solution(brown, yellow) {
  // x * y = brown + yellow
  // (brown + yellow) / x = y
  // (x-2) * (y-2) = yellow
  for (let y = 3; y <= (brown + yellow) / y; y++) {
    let x = Math.floor((brown + yellow) / y);
    if ((x - 2) * (y - 2) === yellow) return [x, y];
  }
}
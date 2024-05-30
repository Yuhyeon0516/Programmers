function solution(A, B) {
  var answer = 0;
  let shiftString = new String(A).valueOf();

  do {
    if (shiftString === B) {
      return answer;
    }
    answer += 1;
    shiftString = shiftString.at(-1) + shiftString.slice(0, -1);
  } while (shiftString !== A);

  return -1;
}
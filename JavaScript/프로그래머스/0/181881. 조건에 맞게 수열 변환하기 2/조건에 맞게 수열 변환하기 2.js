function solution(arr) {
  let answer = 0;

  while (1) {
    const changedArray = arr.map((value) => {
      if (value >= 50 && !(value % 2)) return value / 2;
      else if (value < 50 && value % 2) return value * 2 + 1;
      else return value;
    });

    const arrNotChagned = arr.every(
      (value, index) => value === changedArray[index]
    );

    if (arrNotChagned) break;

    answer += 1;
    arr = [...changedArray];
  }
  return answer;
}
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let calcArr = [];
    for (let k = 0; k < arr2[0].length; k++) {
      let result = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        result += arr1[i][j] * arr2[j][k];
      }
      calcArr.push(result);
    }
    answer.push(calcArr);
  }

  return answer;
}
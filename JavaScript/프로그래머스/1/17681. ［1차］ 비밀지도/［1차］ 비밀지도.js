function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let binaryNum1 = arr1[i].toString(2),
      binaryNum2 = arr2[i].toString(2);
    binaryNum1 = "0".repeat(n - binaryNum1.length) + binaryNum1;
    binaryNum2 = "0".repeat(n - binaryNum2.length) + binaryNum2;

    let result = "";

    for (let j = 0; j < n; j++) {
      if (binaryNum1[j] === "1" || binaryNum2[j] === "1") {
        result += "#";
      } else {
        result += " ";
      }
    }
    answer.push(result);
  }
  return answer;
}
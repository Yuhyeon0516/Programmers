function solution(arr, k) {
  const notDuplicateArr = [...new Set(arr)];
  let answer = [];
  for (let i = 0; i < k; i++) {
    if (i + 1 > notDuplicateArr.length) {
      answer.push(-1);
    } else {
      answer.push(notDuplicateArr[i]);
    }
  }

  return answer;
}
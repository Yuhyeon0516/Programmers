function solution(elements) {
  let answer = new Set();
  const elementsLength = elements.length;

  for (let i = 1; i <= elementsLength; i++) {
    let sum = 0;
    for (let j = 0; j < elementsLength; j++) {
      if (j === 0) {
        for (let k = 0; k < i; k++) {
          sum += elements[k];
        }
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % elementsLength];
      }
      answer.add(sum);
    }
  }

  return answer.size;
}
function solution(picture, k) {
  let answer = new Array(picture.length * k).fill("");

  for (let i = 0; i < picture.length; i++) {
    for (let word of picture[i]) {
      answer[i * k] += word.repeat(k);
    }
    for (let j = 1; j < k; j++) {
      answer[i * k + j] = answer[i * k];
    }
  }
  return answer;
}
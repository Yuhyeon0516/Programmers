function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    let timer = 0;
    for (let j = i + 1; j < prices.length; j++) {
      timer++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(timer);
  }

  return answer;
}
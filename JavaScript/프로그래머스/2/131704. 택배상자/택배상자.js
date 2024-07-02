function solution(order) {
  let answer = 0;
  let subContainer = [];

  for (let i = 1; i <= order.length; i++) {
    subContainer.push(i);

    while (subContainer.length && subContainer.at(-1) === order[answer]) {
      subContainer.pop();
      answer++;
    }
  }
  return answer;
}
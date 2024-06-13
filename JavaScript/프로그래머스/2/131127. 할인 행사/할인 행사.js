function solution(want, number, discount) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 1; j < number[i]; j++) want.push(want[i]);
  }
  want.sort();

  for (let k = 0; k <= discount.length - 10; k++) {
    const slicedDiscount = discount.slice(k, k + 10).sort();
    if (want.every((value, index) => value === slicedDiscount[index])) {
      answer++;
    }
  }
  return answer;
}
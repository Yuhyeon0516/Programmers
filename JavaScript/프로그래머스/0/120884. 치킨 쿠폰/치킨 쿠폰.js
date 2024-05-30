function solution(chicken) {
  var answer = 0;

  while (chicken / 10 >= 1) {
    const coupon = Math.floor(chicken / 10);
    answer += coupon;
    chicken = coupon + (chicken % 10);
  }
  return answer;
}
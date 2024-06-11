function solution(s) {
  let answer = [0, 0];
  while (s !== "1") {
    const splitedS = s.split("");
    const oneLength = splitedS.filter((value) => value === "1").length;
    const zero = splitedS.filter((value) => value === "0");

    answer[1] += zero.length;

    s = oneLength.toString(2);
    answer[0]++;
  }
  return answer;
}
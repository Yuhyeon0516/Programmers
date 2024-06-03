function solution(s) {
  var answer = 0;
  const splitedS = s.split(" ");
  for (let i = 0; i < splitedS.length; i++) {
    if (splitedS[i] === "Z") {
      answer -= Number(splitedS[i - 1]);
    } else {
      answer += Number(splitedS[i]);
    }
  }
  return answer;
}
function solution(X, Y) {
  var answer = "";
  let dictX = {};
  let dictY = {};
  X.split("").forEach((value) =>
    dictX[value] ? dictX[value]++ : (dictX[value] = 1)
  );
  Y.split("").forEach((value) =>
    dictY[value] ? dictY[value]++ : (dictY[value] = 1)
  );
  for (let i = 9; i >= 0; i--) {
    const stringI = String(i);
    if (dictX[stringI] && dictY[stringI]) {
      answer += stringI.repeat(Math.min(dictX[stringI], dictY[stringI]));
    }
  }

  return answer[0] === "0" ? "0" : answer.length ? answer : "-1";
}
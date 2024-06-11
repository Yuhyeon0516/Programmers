function solution(survey, choices) {
  var answer = "";
  const personalityScore = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    // 긍정 선택
    if (choices[i] >= 5)
      personalityScore[survey[i].at(-1)] += (choices[i] % 5) + 1;
    // 부정 선택
    else if (choices[i] <= 3) {
      if (choices[i] === 1) personalityScore[survey[i].at(0)] += 3;
      else if (choices[i] === 2) personalityScore[survey[i].at(0)] += 2;
      else personalityScore[survey[i].at(0)] += 1;
    }
  }
  answer += personalityScore["R"] >= personalityScore["T"] ? "R" : "T";
  answer += personalityScore["C"] >= personalityScore["F"] ? "C" : "F";
  answer += personalityScore["J"] >= personalityScore["M"] ? "J" : "M";
  answer += personalityScore["A"] >= personalityScore["N"] ? "A" : "N";

  return answer;
}
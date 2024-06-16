function solution(s) {
  let answer = [];
  const splitedS = s.replace("{{", "").replace("}}", "").split("},{");
  const arrS = splitedS.map((value) => value.split(","));
  arrS.sort((a, b) => a.length - b.length);
  for (let i = 0; i < arrS.length; i++) {
    const filteredArr = arrS[i].filter((value) => !answer.includes(value));
    answer.push(filteredArr[0]);
  }

  return answer.map((value) => Number(value));
}
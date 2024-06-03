function solution(strArr) {
  let answer = 0;
  const maxLength = [...strArr].sort((a, b) => b.length - a.length)[0].length;
  for (let i = maxLength; i >= 1; i--) {
    const eachLengthCount = strArr.filter((value) => value.length === i).length;
    if (answer < eachLengthCount) answer = eachLengthCount;
  }

  return answer;
}
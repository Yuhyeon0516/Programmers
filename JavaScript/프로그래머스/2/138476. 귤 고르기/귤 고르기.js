function solution(k, tangerine) {
  let answer = 0;
  // 귤의 사이즈별 개수 카운트
  const tangerineDict = {};
  for (let t of tangerine) {
    if (tangerineDict[t]) tangerineDict[t] += 1;
    else tangerineDict[t] = 1;
  }
  // 내림차순
  const tangerineArr = Object.values(tangerineDict).sort((a, b) => b - a);

  for (let tang of tangerineArr) {
    answer++;
    if (k > tang) k -= tang;
    else break;
  }

  return answer;
}
function solution(str1, str2) {
  const splitedStr1 = str1.toLowerCase().split("");
  const splitedStr2 = str2.toLowerCase().split("");
  const twoWordArr1 = [];
  const regex = new RegExp("[^a-z]");
  // 교집합의 갯수
  let intersectionCount = 0;

  for (let i = 0; i < splitedStr1.length - 1; i++) {
    // 2글자씩 자르기
    const twoWord = splitedStr1[i] + splitedStr1[i + 1];
    // 정규식으로 알파벳 소문자에 해당하는지 확인
    if (!regex.test(twoWord)) {
      twoWordArr1.push(twoWord);
    }
  }

  // 합집합의 갯수는 arr1을 일단 전부 포함하니 해당 값으로 초기화하고 시작
  let unionCount = twoWordArr1.length;

  for (let i = 0; i < splitedStr2.length - 1; i++) {
    const twoWord = splitedStr2[i] + splitedStr2[i + 1];
    if (!regex.test(twoWord)) {
      const index = twoWordArr1.indexOf(twoWord);
      // index > -1보다 크면 교집합이므로 교집합을 1개 증가 시키고 다중집합일 가능성을 배재하기 위해 splice를 진행
      if (index > -1) {
        intersectionCount++;
        twoWordArr1.splice(index, 1);
      }
      // index가 -1이라면 중복되지 않기때문에 합집합을 1개 증가
      else unionCount++;
    }
  }

  return unionCount === 0
    ? 65536
    : Math.floor((intersectionCount / unionCount) * 65536);
}
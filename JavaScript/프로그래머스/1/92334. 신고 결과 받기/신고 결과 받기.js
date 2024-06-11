function solution(id_list, report, k) {
  let answer = [];
  const idIndex = {};
  const reportList = {};
  const reportCount = {};

  for (let i = 0; i < id_list.length; i++) {
    // 유저별 index를 저장
    idIndex[id_list[i]] = i;
    // 유저별로 메일 받는 횟수 0으로 초기회
    answer.push(0);
    // 유저별 신고한 사람 저장
    reportList[id_list[i]] = [];
    // 유저별 신고 당한 횟수를 0으로 초기화
    reportCount[id_list[i]] = 0;
  }

  // 신고 이력들을 순회하면서 신고한 사람들과 횟수 계산
  for (let i = 0; i < report.length; i++) {
    const [from, to] = report[i].split(" ");

    if (!reportList[to].includes(from)) {
      reportList[to].push(from);
      reportCount[to]++;
    }
  }

  Object.keys(reportCount).forEach((value) => {
    if (reportCount[value] >= k) {
      reportList[value].forEach((value) => {
        answer[idIndex[value]]++;
      });
    }
  });

  return answer;
}
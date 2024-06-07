function solution(N, stages) {
  let stageNumberAndFailureRate = [];
  for (let i = 1; i <= N; i++) {
    let stageReachCount = 0;
    let stageTryCount = 0;

    for (let stage of stages) {
      // 스테이지에 머물고 있는 수
      if (stage === i) stageReachCount++;
      // 스테이지에 도전한 수
      if (stage >= i) stageTryCount++;
    }
    // 실패율과 스테이지 넘버를 오브젝트로 저장
    stageNumberAndFailureRate[i - 1] = {
      number: i,
      failureRate: stageReachCount / stageTryCount,
    };
  }
  // 실패율을 기준으로 내림차순 정렬하고 해당 스테이지 넘버만 배열로 변환
  return [...stageNumberAndFailureRate]
    .sort((a, b) => b.failureRate - a.failureRate)
    .map((value) => value.number);
}
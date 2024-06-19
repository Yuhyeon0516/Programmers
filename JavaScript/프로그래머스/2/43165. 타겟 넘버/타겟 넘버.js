function solution(numbers, target) {
  var answer = 0;

  // 깊이 탐색을 위한 함수 작성
  function DFS(index, sum) {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    // index를 하나 증가시키면서 sum에서 현재 numbers의 값을 +, - 해줌
    DFS(index + 1, sum + numbers[index]);
    DFS(index + 1, sum - numbers[index]);
  }

  // 최초 index 0과 sum 0에서 시작
  DFS(0, 0);

  return answer;
}
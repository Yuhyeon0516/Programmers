function solution(k, dungeons) {
  var answer = 0;
  const visitedNode = new Array(dungeons.length).fill(false);

  function DFS(k, l) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visitedNode[i] && dungeons[i][0] <= k) {
        visitedNode[i] = true;
        DFS(k - dungeons[i][1], l + 1);
        visitedNode[i] = false;
      }
    }

    answer = Math.max(answer, l);
  }

  DFS(k, 0);

  return answer;
}
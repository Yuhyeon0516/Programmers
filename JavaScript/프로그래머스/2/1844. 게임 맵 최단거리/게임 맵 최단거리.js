function solution(maps) {
  let count = 1;
  let visitedMaps = [...maps];
  let queue = [];
  // 동, 서, 남, 북 정의
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  // n과 m 정의
  const n = maps.length;
  const m = maps[0].length;

  // BFS 실행을 위한 최초 queue position 넣어줌
  queue.push([0, 0]);

  // 최초 캐릭터가 있던 위치는 방문한걸로 변경
  visitedMaps[0][0] = 0;

  // BFS
  while (queue.length > 0) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          nx <= n - 1 &&
          ny >= 0 &&
          ny <= m - 1 &&
          visitedMaps[nx][ny] === 1
        ) {
          if (nx === n - 1 && ny === m - 1) return count + 1;

          queue.push([nx, ny]);
          visitedMaps[nx][ny] = 0;
        }
      }
    }
    count++;
  }

  return -1;
}
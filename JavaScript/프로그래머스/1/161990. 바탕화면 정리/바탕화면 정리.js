function solution(wallpaper) {
  let answer = [wallpaper.length, wallpaper[0].length, -1, -1];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        if (answer[0] > i) answer[0] = i;
        if (answer[1] > j) answer[1] = j;
        if (answer[2] < i + 1) answer[2] = i + 1;
        if (answer[3] < j + 1) answer[3] = j + 1;
      }
    }
  }

  return answer;
}
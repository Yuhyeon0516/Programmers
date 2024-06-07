function solution(name, yearning, photo) {
  let answer = [];
  photo.forEach((value) => {
    let score = 0;
    value.forEach((val) => {
      const index = name.indexOf(val);
      if (index > -1) {
        score += yearning[index];
      }
    });
    answer.push(score);
  });
  return answer;
}
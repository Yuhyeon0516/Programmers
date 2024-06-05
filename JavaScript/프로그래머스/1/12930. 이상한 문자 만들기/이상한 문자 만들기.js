function solution(s) {
  let answer = [];
  [...s.split(" ")].forEach((value) => {
    let word = "";
    for (let i = 0; i < value.length; i++) {
      if (i % 2) word += value[i].toLowerCase();
      else word += value[i].toUpperCase();
    }
    answer.push(word);
  });
  return answer.join(" ");
}
function solution(s, skip, index) {
  var answer = "";
  const splitedS = s.split("");
  const splitedSkip = skip.split("");

  for (let word of splitedS) {
    let count = 0;
    while (count < index) {
      let ascii = String(word).charCodeAt() + 1;
      if (ascii > 122) ascii -= 26;
      word = String.fromCharCode(ascii);
      if (!splitedSkip.includes(word)) count++;
      console.log(word, count);
    }

    answer += word;
  }
  return answer;
}
function solution(msg) {
  const answer = [];
  const compressionWord = [
    undefined,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const splitedMsg = msg.split("");
  let word = "";

  while (splitedMsg.length > 0) {
    if (!word) word = splitedMsg.shift();
    // console.log(compressionWord);
    // console.log(splitedMsg, word);
    const index = compressionWord.indexOf(word);
    if (splitedMsg[0]) {
      const nextIndex = compressionWord.indexOf(word + splitedMsg[0]);
      if (nextIndex > 0) {
        word = word + splitedMsg.shift();
      } else {
        answer.push(index);
        compressionWord.push(word + splitedMsg[0]);
        word = "";
      }
    } else {
      answer.push(index);
      word = "";
    }
  }

  if (word) answer.push(compressionWord.indexOf(word));

  return answer;
}
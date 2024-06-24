function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let answer = [];

  function DFS(currentWord, length) {
    if (length > 5) return;

    answer.push(currentWord);

    for (let i = 0; i < vowels.length; i++) {
      DFS(currentWord + vowels[i], length + 1);
    }
  }

  DFS("", 0);
  return answer.indexOf(word);
}
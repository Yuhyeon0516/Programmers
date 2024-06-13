function solution(n, words) {
  let appearedWords = [words[0]];
  let lastWord = words[0].at(-1);

  for (let i = 1; i < words.length; i++) {
    if (lastWord !== words[i].at(0) || appearedWords.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    lastWord = words[i].at(-1);
    appearedWords.push(words[i]);
  }

  return [0, 0];
}
function solution(clothes) {
  const hash = {};

  for (let [name, type] of clothes) {
    if (hash[type]) hash[type]++;
    else hash[type] = 1;
  }

  return Object.keys(hash).reduce((acc, cur) => acc * (hash[cur] + 1), 1) - 1;
}
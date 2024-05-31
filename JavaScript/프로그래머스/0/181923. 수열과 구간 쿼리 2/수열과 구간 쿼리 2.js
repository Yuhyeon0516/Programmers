function solution(arr, queries) {
  var answer = [];
  for (query of queries) {
    let result = -1;
    const sortedArr = [...arr]
      .slice(query[0], query[1] + 1)
      .sort((a, b) => a - b);

    for (sortedItem of sortedArr) {
      if (sortedItem > query[2]) {
        result = sortedItem;
        break;
      }
    }

    answer.push(result);
  }
  return answer;
}
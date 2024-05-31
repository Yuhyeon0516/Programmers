function solution(str_list) {
  let answer = [];
  let lastIndex = 0;
  for (let str of str_list) {
    console.log(str);
    if (str !== "l" && str !== "r") {
      answer.push(str);
    } else {
      if (str === "l") {
        return answer;
      }

      return str_list.slice(lastIndex + 1);
    }
    lastIndex += 1;
  }
  return [];
}
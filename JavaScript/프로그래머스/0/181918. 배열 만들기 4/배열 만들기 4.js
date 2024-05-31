function solution(arr) {
  var stk = [];
  let i = 0;

  while (i < arr.length) {
    if (!stk.length) {
      stk.push(arr[i]);
      i += 1;
    } else {
      if (stk.at(-1) < arr[i]) {
        stk.push(arr[i]);
        i += 1;
      } else {
        stk.pop();
      }
    }
  }
  return stk;
}
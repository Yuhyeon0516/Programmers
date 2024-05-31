function solution(arr) {
  var stk = [];
  let i = 0;

  while (i < arr.length) {
    if (!stk.length) {
      stk.push(arr[i]);
    } else {
      if (stk.at(-1) === arr[i]) {
        stk.pop();
      } else {
        stk.push(arr[i]);
      }
    }
    i += 1;
  }

  return stk.length ? stk : [-1];
}
function solution(arr) {
  while (arr.length !== arr[0].length) {
    if (arr.length > arr[0].length) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].push(0);
      }
    } else {
      arr.push(new Array(arr[0].length).fill(0));
    }
  }

  return arr;
}
function solution(array) {
  let countingMap = new Map();
  let countArray = new Array();
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (!countingMap.has(array[i])) countingMap.set(array[i], 0);
    else countingMap.set(array[i], countingMap.get(array[i]) + 1);
    while (countingMap.get(array[i]) > max) max++;
  }

  for (let [key, value] of countingMap) {
    if (value === max) countArray.push(key);
  }

  return countArray.length === 1 ? countArray[0] : -1;
}
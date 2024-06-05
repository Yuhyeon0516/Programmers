function solution(sizes) {
  const maxhArr = [];
  const minArr = [];
  for (let i = 0; i < sizes.length; i++) {
    const [max, min] = [Math.max(...sizes[i]), Math.min(...sizes[i])];
    maxhArr.push(max);
    minArr.push(min);
  }
  return Math.max(...maxhArr) * Math.max(...minArr);
}
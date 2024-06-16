function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  for (let city of cities) {
    city = city.toLowerCase();
    cache = cache.slice(-cacheSize);
    index = cache.indexOf(city);
    if (index > -1) {
      cache.splice(index, 1);
      answer += 1;
    } else {
      answer += 5;
    }
    if (cacheSize !== 0) cache.push(city);
  }
  return answer;
}
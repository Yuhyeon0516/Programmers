function solution(num_list) {
  var multiply = 1;
  var sum = 0;
  for (let i = 0; i < num_list.length; i++) {
    multiply *= num_list[i];
    sum += num_list[i];
  }

  if (multiply < sum * sum) return 1;
  return 0;
}
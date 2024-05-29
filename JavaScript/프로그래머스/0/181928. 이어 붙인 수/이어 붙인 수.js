function solution(num_list) {
  var sumEvenNumber = 0;
  var sumOddNumber = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2) {
      sumEvenNumber *= 10;
      sumEvenNumber += num_list[i];
    } else {
      sumOddNumber *= 10;
      sumOddNumber += num_list[i];
    }
  }

  return sumEvenNumber + sumOddNumber;
}
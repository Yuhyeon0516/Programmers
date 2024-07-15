function solution(numbers) {
  return numbers.map((number) => {
    if (!(number % 2)) return number + 1;
    const bin = "0" + number.toString(2);
    const idx = bin.lastIndexOf("0");
    return parseInt(bin.substring(0, idx) + "10" + bin.substring(idx + 2), 2);
  });
}

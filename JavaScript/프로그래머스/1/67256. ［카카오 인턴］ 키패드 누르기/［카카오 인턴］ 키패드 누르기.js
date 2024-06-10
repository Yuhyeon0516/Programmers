function solution(numbers, hand) {
  let answer = "";
  const numberPosition = [
    [0, 0],
    [-1, 3],
    [0, 3],
    [1, 3],
    [-1, 2],
    [0, 2],
    [1, 2],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  let leftThumbPosition = [-1, 0],
    rightThumbPosition = [1, 0];

  for (let number of numbers) {
    switch (number) {
      case 1:
      case 4:
      case 7:
        leftThumbPosition = numberPosition[number];
        answer += "L";
        break;

      case 3:
      case 6:
      case 9:
        rightThumbPosition = numberPosition[number];
        answer += "R";
        break;

      default:
        const leftDistance =
          Math.abs(leftThumbPosition[0] - numberPosition[number][0]) +
          Math.abs(leftThumbPosition[1] - numberPosition[number][1]);
        const rightDistance =
          Math.abs(rightThumbPosition[0] - numberPosition[number][0]) +
          Math.abs(rightThumbPosition[1] - numberPosition[number][1]);

        if (
          leftDistance < rightDistance ||
          (hand === "left" && leftDistance === rightDistance)
        ) {
          answer += "L";
          leftThumbPosition = numberPosition[number];
        } else if (
          leftDistance > rightDistance ||
          (hand === "right" && leftDistance === rightDistance)
        ) {
          answer += "R";
          rightThumbPosition = numberPosition[number];
        }
        break;
    }
  }
  return answer;
}
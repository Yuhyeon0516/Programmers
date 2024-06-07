function solution(a, b) {
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayIndex = 5;
  for (let i = 0; i < a - 1; i++) {
    dayIndex += dateOfMonth[i];
  }

  return dayOfWeek[(dayIndex + b - 1) % 7];
}
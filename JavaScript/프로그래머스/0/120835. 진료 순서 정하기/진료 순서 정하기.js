function solution(emergency) {
  return [...emergency].map(
    (value) => [...emergency].sort((a, b) => b - a).indexOf(value) + 1
  );
}
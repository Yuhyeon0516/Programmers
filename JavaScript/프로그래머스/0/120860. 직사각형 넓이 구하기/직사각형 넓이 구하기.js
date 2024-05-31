function solution(dots) {
  const sortedToX = [...dots].sort((a, b) => a[0] - b[0]);
  const sortedToY = [...dots].sort((a, b) => a[1] - b[1]);

  return (
    (sortedToX.at(-1)[0] - sortedToX[0][0]) *
    (sortedToY.at(-1)[1] - sortedToY[0][1])
  );
}
function solution(ineq, eq, n, m) {
  switch (ineq) {
    case "<":
      switch (eq) {
        case "=":
          return Number(n <= m);

        default:
          return Number(n < m);
      }

    default:
      switch (eq) {
        case "=":
          return Number(n >= m);

        default:
          return Number(n > m);
      }
  }
}
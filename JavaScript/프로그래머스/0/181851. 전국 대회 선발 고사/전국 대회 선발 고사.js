function solution(rank, attendance) {
  let a = [0, 0, 0];
  let count = 0;

  for (let i = 1; i <= rank.length; i++) {
    const index = rank.indexOf(i);

    if (attendance[index]) {
      a[count] = index;
      count += 1;
    }
  }

  return 10000 * a[0] + 100 * a[1] + a[2];
}
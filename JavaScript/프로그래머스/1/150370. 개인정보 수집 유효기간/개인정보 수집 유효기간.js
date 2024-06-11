function solution(today, terms, privacies) {
  let answer = [];
  const termObj = {};
  const splitedToday = today.split(".");
  const todayToDay =
    Number(splitedToday[0]) * 12 * 28 +
    Number(splitedToday[1]) * 28 +
    Number(splitedToday[2]);

  for (let term of terms) {
    const [grade, period] = term.split(" ");
    termObj[grade] = Number(period);
  }
  for (let i = 0; i < privacies.length; i++) {
    const [date, grade] = privacies[i].split(" ");
    const [stringYear, stringMonth, stringDay] = date.split(".");
    const periodToDay =
      Number(stringYear) * 12 * 28 +
      (Number(stringMonth) + termObj[grade]) * 28 +
      (Number(stringDay) - 1);
    if (periodToDay < todayToDay) answer.push(i + 1);
  }

  return answer;
}
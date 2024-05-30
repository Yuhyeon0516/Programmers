function solution(polynomial) {
  const splitedPolynomial = polynomial.split(" + ");
  const xArr = splitedPolynomial
    .filter((value) => value.includes("x"))
    .map((value) => (value.split("x")[0] ? value.split("x")[0] : 1));

  const constArr = splitedPolynomial.filter((value) => !value.includes("x"));

  if (xArr.length && constArr.length) {
    const reducedXArr = xArr.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    const reducedConstArr = constArr.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );

    return reducedXArr === 1
      ? `x + ${reducedConstArr}`
      : `${reducedXArr}x + ${reducedConstArr}`;
  } else {
    if (xArr.length) {
      const reducedXArr = xArr.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue),
        0
      );

      return reducedXArr === 1 ? "x" : `${reducedXArr}x`;
    } else {
      const reducedConstArr = constArr.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue),
        0
      );

      return String(reducedConstArr);
    }
  }
}
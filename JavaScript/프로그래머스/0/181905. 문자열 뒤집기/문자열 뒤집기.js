function solution(my_string, s, e) {
  const splitedMyString = my_string.split("");
  return [
    ...splitedMyString.slice(0, s),
    ...splitedMyString.slice(s, e + 1).reverse(),
    ...splitedMyString.slice(e + 1),
  ].join("");
}
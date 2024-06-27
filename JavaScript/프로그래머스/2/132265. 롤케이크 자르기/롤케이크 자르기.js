function solution(topping) {
  let answer = 0;
  const cheolsu = new Map();
  const brother = new Map();

  for (let toppingItem of topping) {
    if (cheolsu.get(toppingItem))
      cheolsu.set(toppingItem, cheolsu.get(toppingItem) + 1);
    else cheolsu.set(toppingItem, 1);
  }

  for (let toppingItem of topping) {
    if (cheolsu.get(toppingItem) > 1)
      cheolsu.set(toppingItem, cheolsu.get(toppingItem) - 1);
    else cheolsu.delete(toppingItem);

    if (brother.get(toppingItem))
      brother.set(toppingItem, brother.get(toppingItem) + 1);
    else brother.set(toppingItem, 1);

    if (cheolsu.size === brother.size) answer++;
  }

  return answer;
}
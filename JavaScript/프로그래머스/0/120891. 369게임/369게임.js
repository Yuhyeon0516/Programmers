function solution(order) {
  const arrOrder = [...String(order)];
  return (
    arrOrder.filter((value) => value === "3").length +
    arrOrder.filter((value) => value === "6").length +
    arrOrder.filter((value) => value === "9").length
  );
}
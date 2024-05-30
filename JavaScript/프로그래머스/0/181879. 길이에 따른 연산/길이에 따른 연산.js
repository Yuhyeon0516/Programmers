function solution(num_list) {
    var numListLength = num_list.length;
    var initialValue = numListLength > 10 ? 0 : 1;
    return num_list.reduce((accumulator, currentValue) => numListLength > 10 ? accumulator + currentValue : accumulator * currentValue,
  initialValue,);
}
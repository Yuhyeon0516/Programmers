function solution(d, budget) {
    let sortedD = [...d].sort((a, b) => a - b);
    while (sortedD.reduce((acc, cur) => acc + cur, 0) > budget) {
        sortedD.pop();
    }
    return sortedD.length;
}
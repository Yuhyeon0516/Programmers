function solution(arr, divisor) {
    const answer = [...arr].filter((value) => !(value % divisor)).sort((a, b) => a - b)
    return answer.length ? answer : [-1];
}
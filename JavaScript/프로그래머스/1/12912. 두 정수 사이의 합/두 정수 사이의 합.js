function solution(a, b) {
    let answer = 0;
    let [min, max] = [a, b].sort((a, b) => a - b);
    for(let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}
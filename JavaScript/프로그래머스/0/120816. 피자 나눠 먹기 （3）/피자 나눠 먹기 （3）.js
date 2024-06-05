function solution(slice, n) {
    let answer = 1;
    while (slice * answer < n) {
        answer++;
    }
    return answer;
}
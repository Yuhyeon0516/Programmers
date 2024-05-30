function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (!(n % i)) {
            answer += 1;
        }
    }
    return answer;
}
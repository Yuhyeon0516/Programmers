function solution(s1, s2) {
    let answer = 0;
    for (let s of s1) {
        if (s2.includes(s)) answer++;
    }
    return answer;
}
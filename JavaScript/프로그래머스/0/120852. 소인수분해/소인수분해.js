function solution(n) {
    var answer = new Set();
    let count = 2;
    
    while (count <= n) {
        if (n % count === 0) {
            answer.add(count);
            n /= count;
            count = 2;
        } else {
            count += 1;
        }
    }
    return [...answer].sort((a, b) => a - b);
}
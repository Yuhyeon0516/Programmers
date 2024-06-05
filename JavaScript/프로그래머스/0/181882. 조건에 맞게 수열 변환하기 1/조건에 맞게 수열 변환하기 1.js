function solution(arr) {
    var answer = [];
    for (let num of arr) {
        if (num >= 50 && !(num % 2)) {
            answer.push(num / 2);
        } else if (num < 50 && num % 2) {
            answer.push(num * 2);
        } else {
            answer.push(num);
        }
    }
    return answer;
}
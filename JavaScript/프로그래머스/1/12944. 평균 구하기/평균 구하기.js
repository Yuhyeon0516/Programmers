function solution(arr) {
    var answer = 0;
    for (let num of arr) {
        answer += num
    }
    return answer / arr.length;
}
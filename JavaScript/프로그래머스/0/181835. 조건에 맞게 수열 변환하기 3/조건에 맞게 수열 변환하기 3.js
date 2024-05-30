function solution(arr, k) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (k % 2) {
            answer.push(arr[i] * k);
        } else {
            answer.push(arr[i] + k);
        }
    }
    return answer;
}
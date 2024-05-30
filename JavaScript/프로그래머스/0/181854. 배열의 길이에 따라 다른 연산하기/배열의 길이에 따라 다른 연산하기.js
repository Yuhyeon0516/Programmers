function solution(arr, n) {
    var answer = [];
    var arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if ((arrLength % 2 && (i + 1) % 2) || (!(arrLength % 2) && !((i + 1) % 2))) {
            answer.push(arr[i] + n);
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}
function solution(num_list) {
    let answer = [0, 0];
    for (let num of num_list) {
        if (num % 2) {
            answer[1]++;
        } else {
            answer[0]++;
        }
    }
    return answer;
}
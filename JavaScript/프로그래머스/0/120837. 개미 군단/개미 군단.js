function solution(hp) {
    var answer = 0;
    
    while (hp > 0) {
        if (Math.floor(hp / 5)) {
            hp -= 5;
            answer += 1;
        } else if (Math.floor(hp / 3)) {
            hp -= 3;
            answer += 1;
        } else {
            hp -= 1;
            answer += 1;
        }
    } 
    return answer;
}
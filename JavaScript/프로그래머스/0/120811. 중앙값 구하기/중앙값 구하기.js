function solution(array) {
    const midIndex = Math.floor(array.length / 2);
    
    return array.sort((a, b) => a - b)[midIndex];
}
function solution(n) {
    return Number([...String(n)].map((value) => Number(value)).sort((a, b) => b - a).join(""));
}
function solution(numbers) {
    const splitedNumbers = [...numbers].sort((a, b) => a - b);
    return splitedNumbers.at(-1) * splitedNumbers.at(-2);
}
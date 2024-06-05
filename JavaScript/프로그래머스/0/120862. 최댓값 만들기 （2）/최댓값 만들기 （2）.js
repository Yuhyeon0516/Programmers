function solution(numbers) {
    const splitedNumbers = [...numbers].sort((a, b) => b - a);
    return Math.max(splitedNumbers[0] * splitedNumbers[1], splitedNumbers.at(-1) * splitedNumbers.at(-2));
}
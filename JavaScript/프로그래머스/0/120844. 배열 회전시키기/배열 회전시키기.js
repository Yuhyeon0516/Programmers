function solution(numbers, direction) {
    return direction === "right" ? [numbers.at(-1), ...numbers.slice(0, -1)] : [...numbers.slice(1), numbers[0]];
}
class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(scoville) {
    this.heap.push(scoville);
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
      this.heap[Math.floor((index - 1) / 2)] = temp;
      index = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let minChildIndex =
        index * 2 + 2 < this.heap.length &&
        this.heap[index * 2 + 2] < this.heap[index * 2 + 1]
          ? index * 2 + 2
          : index * 2 + 1;

      if (this.heap[index] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[index];
      this.heap[index] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      index = minChildIndex;
    }

    return value;
  }

  first() {
    return this.heap[0];
  }
}

function solution(scovilles, K) {
  let answer = 0;
  const heap = new Heap();

  for (let scoville of scovilles) {
    heap.push(scoville);
  }

  while (heap.size() >= 2 && heap.first() < K) {
    const newScoville = heap.pop() + heap.pop() * 2;
    heap.push(newScoville);
    answer++;
  }

  return heap.first() >= K ? answer : -1;
}
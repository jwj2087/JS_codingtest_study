function solution(n, k) {
  let i = 0;
  const arr = [...new Array(n)].map((_, i) => i + 1);
  while (arr.length > 1) {
    let index = (i + k - 1) % arr.length;
    arr.splice(index, 1);
    i = index;
  }

  console.log(arr);
}

solution(5, 2);

/*********************/
// queue로 풀이
// queue class 생성
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  
  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }

}

function solutioQueue(n, k) {
  const queue = new Queue();

  // 1부터 n까지 번호를 deque에 추가
  for (let i = 0; i <= n; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // deque에 하나의 요소가 남을 때까지 
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop()); // k번째 요소를 찾기위해 앞에서부터 제거하고 뒤에 추가 < 원형큐를 돌리는 중
    }
    queue.pop(); // k번째 요소 제거
  }

  return queue.pop(); // 마지막으로 남은 요소 반환
}

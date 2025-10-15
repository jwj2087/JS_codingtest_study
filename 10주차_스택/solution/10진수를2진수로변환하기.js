function solution(num) {
  const stack = [];

  while (num > 0) {
    stack.push(num % 2); // push로 나머지 모으기
    num = Math.floor(num / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop(); // pop을 이용해서 LIFO로 꺼내서 이어붙이기
  }

  console.log(binary);
}

solution(10);
solution(27);
solution(12345);

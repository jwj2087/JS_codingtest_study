function solution(s) {
    const stack = [];
    s.split(" ").forEach((el) => {
    if (el === "Z") { // Z면 pop으로 마지막 요소 제거
      stack.pop(); 
    } else { // 아니면 push로 추가
      stack.push(Number(el));
    }
  });
  
  return stack.reduce((acc, el) => acc + el, 0);
}
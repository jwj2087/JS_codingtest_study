function solution(s) {
  const stack = [];

  for (const c of s) {
    // 주어진 문자열 순회
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      // stack이 비어있지 않고 현재 문자와 스택의 top이 동일하다면 제거
      // => 현재 문자와 그 직전 문자가 동일하다는 소리
      stack.pop();
    } else {
      // 아니라면 스택에 현재 문자를 추가해서 스택을 쌓아나가기
      stack.push(c);
    }
    console.log(stack);
  }
  // 스택이 비어있으면 1, 그렇지 않다면 0
  return stack.length === 0 ? 1 : 0;
}

solution("BAABAA");

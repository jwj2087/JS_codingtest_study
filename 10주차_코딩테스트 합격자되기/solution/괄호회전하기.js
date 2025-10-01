function solution(s) {
  const n = s.length;
  let answer = 0; // 올바른 괄호 문자열 갯수

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      // 문자열 회전
      const c = s[(i + j) % n]; // 회전 시키면서 문자열 참조

      if (c === "[" || c === "(" || c === "{") {
        // 열린 괄호의 경우
        stack.push(c); // 스택에 넣기

        console.log(stack);
      } else {
        // 열린 괄호가 아닌 경우
        if (stack.length === 0) {
          // 스택에 들어가있는 열린 괄호가 없는 경우
          isCorrect = false;
          break; // 처음으로
        }

        const top = stack[stack.length - 1];

        // 현재 참조값과 top 짝이 맞는지 비교
        // top 과 짝이 맞다면 이전 값과 현재 값이 열림-닫힘 올바른 괄호 문자열이 된다.
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }

        console.log(stack);
      }
    }

    // isCorrect가 true고 stack이 비어있다면 올바른 괄호 문자열이다.
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}

console.log("answer: ", solution("}]()[{"));

function solution(quiz) {
    const answer = quiz.map(el => {
        const equation = el.split(" = ");
        const num = equation[0].split(" ").map(Number).filter(el => !isNaN(el)) // 숫자
        const op = equation[0].split(" ").filter(el => isNaN(el)); // 연산자
        // 정규식을 사용했다가 -2 같은 경우도 연산자 취급을 해서 공백으로 분리
        
        let result = num[0];
        op.forEach((ch, i) => {
            if(ch === '+') {
                result += num[i+1];
            } else if(ch === '-') {
                result -= num[i+1];
            }
        });
        
        return result==equation[1] ? "O" : "X";
    })
    return answer;
}

/* 다른사람의 풀이 */
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X"; // eval 문자열을 코드 취급
    });
}
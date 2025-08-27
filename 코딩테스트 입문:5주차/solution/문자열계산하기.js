function solution(my_string) { // 드디어 정규식 사용! 12점!
    const regex = /[+\-]/g; //정규식
    const num = my_string.split(regex).map(Number); // 숫자
    const op = my_string.match(regex); // 연산자
    let result = num[0];
    
    op.forEach((ch, i) => {
        if(ch === '+') {
            result += num[i+1];
        } else if(ch === '-') {
            result -= num[i+1];
        }
    });
    return result;
}

/* 다른사람의 풀이 */
// 스택을 이용해서 +, - 판단해서 넣기
function solution(my_string) {
    const stack = [];

    let sign = 1;
    for (const ch of my_string.split(" ")) {
        if (ch === "+") {
            sign = 1;
        } else if (ch === "-") {
            sign = -1;
        } else {
            stack.push(ch * sign);
        }
    }

    return stack.reduce((a,b) => a + b, 0);
}
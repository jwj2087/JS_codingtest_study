function solution(numbers, num1, num2) {
    const answer = numbers.splice(num1, num2-num1+1);
    return answer;
}

/* 다른사람의 풀이 */
// 반복문으로 하나하나 잘라 넣기
function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }

    return answer;
}
function solution(num1, num2) {
    var answer = 0;
    answer = num1/num2;
    return Math.floor(answer);
}

/* 다른사람의 풀이 */
function solution(num1, num2) {
    return Math.trunc(num1 / num2); //훨씬 깔끔하게 쓸 수 있다!
}
function solution(num1, num2) {
    return Math.floor((num1/num2)*1000);
}

/* 다른사람의 풀이 */
function solution2(num1, num2) {
    return Math.trunc(num1 / num2 * 1000); // Math.trunc() 소수점 이하 버리기
}

console.log(Math.trunc(-23.3)); // -23, 소수점 이하 버리기
console.log(Math.floor(-23.3)); // -24, 소수점 내림
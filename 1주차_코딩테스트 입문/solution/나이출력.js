function solution(age) {
    return 2022-age+1;
}

/* 다른사람의 풀이 - 현재 나이 계산 */
function solution2(age) {
    return new Date().getFullYear() - age + 1;
}
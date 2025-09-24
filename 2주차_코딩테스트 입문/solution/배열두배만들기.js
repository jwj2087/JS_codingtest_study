function solution(numbers) {
    const answer = numbers.map((el) => {
       return el*2; 
    });
    return answer;
}

/* 다른사람의 풀이 */
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
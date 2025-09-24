function solution(numbers) {
    numbers.sort((a,b) => a - b);
    const max1 = numbers[0]*numbers[1];
    const max2 = numbers[numbers.length-1]*numbers[numbers.length-2];
    return Math.max(max1, max2)
}

/* 다른사람의 풀이 */
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}
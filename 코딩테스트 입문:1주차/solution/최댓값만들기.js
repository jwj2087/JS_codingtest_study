/*
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수
*/
function solution(numbers) {
    let max = Math.max(...numbers);
    let index = numbers.findIndex((num, i) => {
        return num === max;
    })
    let numbers2 = numbers.splice(index, 1);
    let max2 = Math.max(...numbers);
    return max*max2;
}

/* 다른사람의 풀이 */
// 그냥 sort()를 쓰면 한번에 해결될 것을...
function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}
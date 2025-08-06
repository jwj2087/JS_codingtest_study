/*
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
*/
function solution(array, n) {
    let sum = 0;
    array.forEach((el) => {
       return el === n ? sum++: sum; 
    });
    return sum;
}

/* 다른사람의 풀이 */
// filter로 모아서 그 길이 반환하기
function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}
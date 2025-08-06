/*
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수
*/
function solution(my_string, n) {
    const arr = [...my_string];
    const str = [];
    arr.forEach((el, i) => {
       for(let j=0; j<n; j++)
           str.push(el);
    });
    return str.join('');
}

/* 다른사람의 풀이 */
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}
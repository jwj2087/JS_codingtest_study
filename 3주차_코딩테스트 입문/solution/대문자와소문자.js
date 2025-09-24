function solution(my_string) {
    const result = [...my_string].map((el) => {
       if(el === el.toUpperCase())
           return el.toLowerCase();
        else if(el === el.toLowerCase())
            return el.toUpperCase();
    });
    
    return result.join('');
}

/* 다른사람의 풀이 */
// 삼항연산자
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}
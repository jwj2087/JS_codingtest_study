function solution(my_string) {
    let spilt = my_string.split("");
    let reverse = spilt.reverse();
    let join = reverse.join("");
    return join;
}

/* 다른사람의 풀이 */
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}
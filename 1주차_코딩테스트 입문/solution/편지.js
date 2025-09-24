/*
글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 
편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 
편지지의 최소 가로길이를 return 하도록 solution 함수 */

function solution(message) {
    let split = message.split("");
    return split.length*2;
}

/* 다른사람의 풀이 */
// 그냥 length 쓰면 됨.
function solution(message) {
    return message.length*2;
}
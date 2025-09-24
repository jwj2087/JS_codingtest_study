function solution(dot) {
    const [x, y] = [...dot];
    let answer;
    if(x>0 && y>0)
        answer = 1;
    else if(x<0 && y>0)
        answer = 2;
    else if(x<0 && y<0)
        answer = 3;
    else if(x>0 && y<0)
        answer = 4;
    else 
        answer = 0;
    return answer;
}

/* 다른사람의 풀이 */
// 구조분해로 풀기
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
// 삼항연산자 이용
function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}
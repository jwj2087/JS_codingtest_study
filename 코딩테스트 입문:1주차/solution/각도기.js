function solution(angle) {
    if(angle < 90){
        return 1;
    } else if (angle == 90) {
        return 2;
    } else if (angle < 180) {
        return 3;
    } else if (angle == 180) {
        return 4;
    }
}

/* 다른사람의 풀이 */
// fliter 사용풀이
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
// 삼항연산자 사용풀이
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
function solution(sides) {
    const max = Math.max(...sides);
    const i = sides.findIndex((arr) => arr == max);
    const min = [...sides];
    min.splice(i, 1);
    let minSum = min.reduce((acc, el) => acc+el);
    return minSum<=max ? 2 : 1;
}   

/* 다른사람의 풀이 */
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
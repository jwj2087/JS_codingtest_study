function solution(array) {
    const max = [...array].sort((a,b) => b - a);
    console.log(max[0])
    let result = [];
    array.forEach((el, i) => {
        if(el === max[0]) {
            result = [el, i];
            return;
        }
    })
    return result;
}

/* 다른사람의 풀이 */
// indexOf
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}
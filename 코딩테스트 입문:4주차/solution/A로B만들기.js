function solution(before, after) {
    const after_arr = [...after];
    [...before].forEach((el) => {
        let i = after_arr.indexOf(el)
        if( i !== -1){
            after_arr.splice(i,1);
        }
    })
    return after_arr.length === 0 ? 1 : 0;
}

/* 다른사람의 풀이 */
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
    // sort()로 정렬해서 동일한 문자열로 만들어버리기
}
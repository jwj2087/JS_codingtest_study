function solution(s1, s2) {
    const result = [];
    
    s1.forEach((e1) => {
        s2.forEach((e2) => {
            if(e1 == e2){
                result.push(e2);
            }
        })
    });
    
    return result.length;
}

/* 다른사람의 풀이 */
// filter와 includes를 이용
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}
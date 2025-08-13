function solution(rsp) {
    let rspArr = rsp.split('');
    const result = rspArr.map((el) => {
       if(el === '2')
           return '0'
        else if(el === '0')
            return '5'
        else if(el === '5')
            return '2'
    });
    return result.join('');
}

/* 다른사람의 풀이 */
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}

// 삼항연산자
function solution(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
}
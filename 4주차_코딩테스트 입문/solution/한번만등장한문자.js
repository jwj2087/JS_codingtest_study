function solution(s) {
    const arr = [...s];
    const cnt = [...s].map((el) => { // 각 index의 count를 배열로 저장
        return [...s].reduce((acc, ch) => {
            if(ch === el)
                return acc = acc + 1;
            else 
                return acc;
        }, 0)
    });
    
    const result = []
    
    cnt.forEach((el, i) => { // cnt 1개인것만 모으기 
        if(el === 1)
            result.push(arr[i]);
    })
    
    return result.sort().join('');
}

/* 다른사람의 풀이 */
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}
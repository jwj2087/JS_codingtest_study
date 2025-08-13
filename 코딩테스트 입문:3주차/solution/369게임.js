function solution(order) {
    const arr = [...order.toString()];
    let clap = 0;
    arr.forEach((el) => {
        if(Number(el)%3 === 0 && Number(el) !== 0)
            clap++;
    });
    return clap;
}

// matchAll() + 정규식 사용
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}
function solution(num, k) {
    const numArr = [...num.toString()];
    let result = numArr.find((el, i) => {
        return el == k;
    });
    if(!result) {
        result = -1;
    } else {
        result = numArr.indexOf(result)+1;
    }
    
    return result;
}

/* 다른사람의 풀이 */
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}
// 앞에 추가되는 글자는 상관 없음 => (string 변환 + 자리 길이 맞추기).indexOf(k) 
function solution(num, k) {
    return ("❤" + num).indexOf(k);
}


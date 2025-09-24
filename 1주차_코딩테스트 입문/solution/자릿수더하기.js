function solution(n) {
    let str = String(n);
    let arr = [...str];
    const sum = arr.reduce((acc, el) => {
        return acc + Number(el);
    }, 0)
    return sum;
}

/* 다른사람의 풀이 */
// 한번에 써버리기
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
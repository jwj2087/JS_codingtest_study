// 그냥 풀이
function solution(numlist, n) {
    numlist.sort((a, b) => b-a); // 큰 수가 앞 순서가 될 수 있도록 오름차순 정렬
    const abs = numlist.map(el => {
        const diff = Math.abs(el - n);
        return {diff, el}; // 차이와 요소를 동시에 저장
    });
    
    abs.sort((a,b) => a.diff - b.diff); // 차이를 기준으로 정렬
    
    const result = [];
    for (const key in abs) {
       result.push(abs[key].el);
    }
    
    return result;
}
// 이전 내용 참고 풀이
function solution(numlist, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || b - a); 

    return array;
}
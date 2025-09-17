function solution(num, total) {
    const center = Math.ceil(total/num); // 중앙값
    const result = [];
    
    for(let i = 0; i<num; i++) { 
        const diff = Math.floor(num/2); // 중앙값 기준 차이
        result.push(center-diff+i); 
    }
    
    return result;
}


/* 다른사람의 풀이 */
function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2)); //최솟값
    var max = Math.floor(total/num + Math.floor(num/2)); //최댓값

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}
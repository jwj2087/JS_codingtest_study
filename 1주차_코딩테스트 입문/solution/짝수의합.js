function solution(n) {
    let sum = 0;
    while(n > 0){
        if( n % 2 === 0){
            sum += n;
        }
        n--;
    }
    return sum;
}

/* 다른사람의 풀이 */
function solution(n) {
    var half = Math.floor(n/2); 
    return half*(half+1); //수열공식
}
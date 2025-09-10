function getGCD(num1, num2){ // 유클리드 호제법, 최대공약수 구하기
    let rest = num1%num2; 
    
    if(num2 === 0){ 
        return num1;
    } else {
        return getGCD(num2, rest); 
        // 나머지로 계속 나누면서 나머지가 0이 되는 순간이 최대공약수
    }
}
function solution(a, b) {
    let gcd = getGCD(a, b);
    let rcB = b/gcd; // 기약분수로 바꾸기
    
    while(rcB%2 === 0) {
        rcB = rcB/2;
    }
    while(rcB%5 === 0) {
        rcB = rcB/5;
    }
    // 2와 5로 계속 나눠서 남은게 1이라면 유한소수
    return rcB===1? 1: 2;
}

/* 다른사람의 풀이 */
function solution(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}
// 소수점 10의 자리까지 확인해서 a/b랑 동일하면 그냥 유한소수. 
// 문제에서 주어진 방법도 아니고 극단적인 유한 소수의 경우는 찾아낼 수 없다 2.00000000007
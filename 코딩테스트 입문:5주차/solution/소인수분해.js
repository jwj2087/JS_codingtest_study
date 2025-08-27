function solution(n) {
    const divisors = new Set();
    
    for(let i = 2; i <= Math.sqrt(n); i++){ // 약수 구하는 방법 참고
        while( n%i === 0){
            divisors.add(i);
            n = n / i;
        }
    }
    
    if (n > 1) divisors.add(n);
   
    console.log(divisors);
    return [...divisors];
}
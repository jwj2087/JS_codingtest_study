function getDivisors(n) { // 약수 반만 구하기
    let divisors = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n%i === 0)
            divisors.push(i);
    }
    
    return divisors;
}

function solution(n) {    
    let result = [];
    for(let i = 1; i <= n; i++){
        let length = getDivisors(i).length; 
        if(length > 1) // 어쨋든 소수만 아니면 합성수임
            result.push(i);
    }
    
    return result.length;
}
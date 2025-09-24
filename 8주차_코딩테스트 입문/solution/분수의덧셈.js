function getGCD(num1, num2){ // 유클리드 호제법
    let rest = num1%num2; 
    if(num2 === 0){
        return num1;
    } else {
        return getGCD(num2, rest);
    }
}

function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    
    const gcd = getGCD(Math.max(denom, numer), Math.min(denom, numer));
    // console.log(gcd);
    const fountain = [numer/gcd, denom/gcd];
    
    return fountain;
}


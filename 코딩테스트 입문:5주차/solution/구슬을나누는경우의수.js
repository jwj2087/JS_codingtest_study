function solution(balls, share) {
    let result = 1;
    for(let i = 1; i <= share; i++ ){ // 조합의 경우의 수 nCr = n! / (r! * (n-r)!)
        result = result * balls / i; 
        balls--;
    }
    
    return result;   
}
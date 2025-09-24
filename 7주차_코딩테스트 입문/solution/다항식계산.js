function solution(polynomial) {
    const num = polynomial.split(" + ").filter(el => !isNaN(el));;
    const poly = polynomial.split(" + ").filter(el => el.includes('x'));
    
    const polyNum = poly.join('').split("x");
    let polySum = 0;
    for(let i=0; i<polyNum.length-1; i++){
        if(polyNum[i] == ''){
            polySum += 1;
        } else {
            polySum += Number(polyNum[i]);    
        }   
    }
    
    if (polySum === 1)
        polySum = "";
            
    let sum = 0;
    for(let i=0; i <num.length; i++){
        sum += Number(num[i]);
    }
    
    let result = '';
    if(polySum !== 0){
        result += polySum + "x"; 
    }
    
    if(polySum !== 0 && sum !== 0) {
        result += " + " + sum;
    } else if(sum!==0){
        result += sum;
    }
        
    
    return result ? result : 0;
}


/* 다른사람의 풀이 */
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x")) 
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0); 
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`); // 있다면 1인지 아닌지 판단해서 answer에 넣기
    if(num) answer.push(num);

    return answer.join(" + "); // join(" + ")으로 합치기....
}
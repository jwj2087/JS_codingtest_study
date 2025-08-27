function solution(sides) {
    const side = sides[0]+sides[1];
    const result = [];
    
    for(let i=1; i<side; i++) {
        if(sides[1] < sides[0] + i  &&  sides[0] < sides[1] + i)
            result.push(i);
    }
    
    return result.length;
}


/* 다른사람의 풀이 */
function solution(sides) {
    return Math.min(...sides)*2-1
}
/**
 * 가장 긴 변 < 나머지 두 변의 합
 * x가 될 수 있는 범위는 
 * 
 * |a - b| < x < a + b
 * 
 * 세 번째 변의 최댓값 = a + b - 1
 * 세 번째 변의 최솟값 = |a - b| + 1
 * 이므로  
 * = (a + b - 1) - (|a - b| + 1) + 1 = 2b-1 (b가 작은 변)
 */
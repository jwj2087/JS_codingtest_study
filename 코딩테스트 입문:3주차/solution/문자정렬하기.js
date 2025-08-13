function solution(my_string) {
    let my_arr = my_string.split('');
    
    const result = my_arr
        .filter(el => !isNaN(el)) 
        .map(Number)              
        .sort((a, b) => a - b);   
    
    
    return result;
}

/* 다른사람의 풀이 */
// 정규표현식
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}
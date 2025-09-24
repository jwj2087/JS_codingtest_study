function solution(array) {
    const count = new Map();
        
    array.forEach(el => {
        if(!count.has(el)){ // key가 없는 경우 초기값 넣기
            count.set(el, 1);
        } else {
          count.set(el, count.get(el)+1);  
        }
    })
    
    const max = Math.max(...count.values()); // 최댓값 구하기
    const result = [...count.entries()] 
    .filter(([_, value]) => value === max) // 최댓값과 동일한 value filter
    .map(([key]) => key); // key 모으기
    
    return result.length < 2 ? Number(...result) : -1;
}
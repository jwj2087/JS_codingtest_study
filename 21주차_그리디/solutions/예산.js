function solution(d, budget) {
  const d_sort = d.sort((a,b) => a-b);
  let i = 0;
  let count = 0;
  while(budget > 0 && i < d_sort.length){
      if(budget < d_sort[i])
          return count;
      
      budget -= d_sort[i];
      count++;
      i++;
  }
  
  return count;
}

/* 다른사람의 풀이 */
function solution(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => {
    // budget에서 price를 빼고 0보다 크거나 같으면 count를 1 증가
    return count + ((budget -= price) >= 0); // count + (true || false)
  }, 0);
}
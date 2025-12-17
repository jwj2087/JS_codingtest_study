function solution(people, limit) {
  people.sort((a, b) => a-b);
  let boats = 0;
  let left = 0; // 가장 가벼운 사람 index
  let right = people.length - 1; // 가장 무거운 사람 index
  
  while(left <= right){
      if(people[left]+people[right] <= limit){ // 가장 가벼운 사람과 가장 무거운 사람의 무게가 limit보다 작거나 같으면 같이 탑승
          boats++; 
          left++; // 가장 가벼운 사람 index 증가
          right--; // 가장 무거운 사람 index 감소
      } else { // 가장 무거운 사람만 탑승
          boats++; 
          right--; // 가장 무거운 사람 index 감소
      }
  }
  return boats;
}

/* 다른사람의 풀이 */
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}
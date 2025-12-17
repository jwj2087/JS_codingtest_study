function solution(k, tangerine) {
  const countMap = new Map();

  tangerine.forEach(el => { // 각 귤의 개수 세기
      countMap.set(el, (countMap.get(el) || 0) + 1);
  });

  const counts = [...countMap.values()]; // 각 귤의 개수 배열
  
  counts.sort((a, b) => b - a);
  
  let sum = 0;
  let typeCount = 0;
  
   for (const cnt of counts) {
      sum += cnt; // 각 귤의 개수 누적
      typeCount++; // 귤의 종류 증가

      // k개 이상 채우면 종료
      if (sum >= k) break;
  }

  return typeCount;
}

/* 다른사람의 풀이 */
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1); // 각 귤의 개수 세기
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}
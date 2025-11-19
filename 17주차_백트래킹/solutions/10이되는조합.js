// 유망 함수 조건
// 1. 현재까지의 합이 10인 경우 백트래킹
// 2. 현재까지의 합이 10 이상인 경우 백트래킹
function solution(n) {
  const result = [];

  function backtrack(sum, selectedNums, start) {
    if (sum === 10) { // 현재까지의 합이 10이라면
      result.push(selectedNums); // 결과에 저장
      return;
    }

    // 다음에 선택할 숫자들을 하나씩 선택하면서
    for (let i = start; i <= n; i++) {  
      if (sum + i <= 10) { // 만약 현재까지 합계가 10 이하라면
        backtrack(sum + i, selectedNums.concat(i), i + 1); // 지금 값을 기준으로 재귀호출
      }
    }
  }

  backtrack(0, [], 1);
  return result;
}

// 유망 함수 조건 다른 ver.
// + 남은 수의 합이 10을 넘어가면 더 이상 진행할 필요 없음
function solution(n) {
  const result = [];
  
  function backtrack(sum, selectedNums, start) {
    if (sum === 10) {
      result.push([...selectedNums]); // 배열 복사
      return;
    }
    
    for (let i = start; i <= n; i++) {
      if (sum + i > 10) break; // 더 이상 탐색 불필요
      // 가능한 순간까지만 반복 후 즉시 종료이기 때문에 훨씬 효율적
      selectedNums.push(i);
      backtrack(sum + i, selectedNums, i + 1);
      selectedNums.pop();
    }
  }
  
  backtrack(0, [], 1);
  return result;
}

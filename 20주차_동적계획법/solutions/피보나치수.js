function solution(n) { 
  const fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo[n] % 1234567;
}

/* 위의 방식대로 하면 숫자 오버플로우가 발생하여 실패하는 경우가 생김 */

function solution(n) { 
  const fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 1] + fibo[i - 2])% 1234567);
  }
  return fibo[n];
}
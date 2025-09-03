function solution(n) {
  let result = n + Math.floor(n / 3);
  if (n % 3 === 0) result++;

  // 현재 숫자보다 작은 3이 들어가는 수만큼 더하기

  while (result % 3 === 0) result++;
}

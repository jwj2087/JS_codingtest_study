function solution(n) {
  if (n === 1) return 1; // 바닥의 가로가 1인 경우
  if (n === 2) return 2; // 바닥의 가로가 2인 경우

  return (solution(n - 1) + solution(n - 2)) % 1000000007;
}

console.log(solution(7));

function solution(n) {
  if (n === 1) return 1; // 바닥의 가로가 1인 경우
  if (n === 2) return 2; // 바닥의 가로가 2인 경우

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;

  return dp[n];
}

console.log(solution(7));


function solution_fastDoubling(n) {
  const MOD = 1000000007n; // 모듈러 값 (BigInt)

  // fastDoubling(k) → [F(k), F(k+1)] 를 반환하는 함수
  // 표준 피보나치에서 F(0) = 0, F(1) = 1
  function fastDoubling(k) {
    // k가 0이면 기본 피보나치 값 반환
    if (k === 0n) return [0n, 1n];

    // k를 2로 나눈 값(m = k // 2)에 대해 재귀 호출
    const [fk, fk1] = fastDoubling(k >> 1n); // k >> 1n == Math.floor(k/2)

    // 피보나치의 빠른 거듭제곱 공식
    // c = F(2m) = F(m) * (2*F(m+1) - F(m))
    const c = (fk * ((fk1 * 2n % MOD - fk + MOD) % MOD)) % MOD;

    // d = F(2m+1) = F(m)^2 + F(m+1)^2
    const d = (fk * fk + fk1 * fk1) % MOD;

    // k가 짝수일 때 → (F(2m), F(2m+1)) 반환
    if (k % 2n === 0n) {
      return [c, d];
    }

    // k가 홀수일 때 → (F(2m+1), F(2m+2)) 반환
    return [d, (c + d) % MOD];
  }

  // 원래 문제의 점화식은 dp[n] = F(n+1)이므로 F(n+1)를 구함
  const k = BigInt(n + 1);
  const [result, _] = fastDoubling(k);

  // result는 BigInt이므로 Number로 변환 (범위 내라 안전)
  return Number(result);
}

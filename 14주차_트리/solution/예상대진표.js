function solution(n, a, b) {
  let answer = 0;
  while (a != b) {
    // 둘다 올림하여 계산
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    // 경기 횟수니 +1
    answer += 1;
  }

  return answer;
}

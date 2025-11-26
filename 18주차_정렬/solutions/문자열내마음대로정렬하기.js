function solution(){
return strings.sort((a, b) => {
  // 1. n번째 문자 비교
  if (a[n] < b[n]) return -1;
  if (a[n] > b[n]) return 1;

  // 2. 같으면 문자열 전체 사전순 비교
  return a.localeCompare(b);
})};

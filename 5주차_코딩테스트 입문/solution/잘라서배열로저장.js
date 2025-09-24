function solution(my_str, n) {
  const result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n)); // 그냥 그 크기만큼 잘라서 배열에 넣기
  }

  return result;
}

/* 다른사람의 풀이 */
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
  /*
  * .{1,${n}} 의 의미:
  * . → 모든 문자 1개
  * {1,${n}} → 최소 1개 ~ 최대 n개 반복 
  * 즉, 문자열을 1~n 글자 단위로 묶음 
  * "g" 플래그 → 문자열 전체(Global)에서 패턴을 찾아 모두 반환
  */
}

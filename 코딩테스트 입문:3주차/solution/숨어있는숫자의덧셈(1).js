function solution(my_string) {
  let my_number = my_string
    .split("") // 분리
    .filter((el) => !isNaN(el)) // 숫자만
    .map(Number); // 숫자로 형변환
  const result = my_number.reduce((acc, el) => { // 모은 자연수들 합
    return acc + el;
  }, 0);

  return result;
}

/* 다른사람의 풀이 */
// 정규식 이용
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}

// 구조분해 이용
function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}

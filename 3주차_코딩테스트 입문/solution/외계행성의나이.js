function solution(age) {
    const ageArr = [...age.toString()].map((el) => {
        return String.fromCharCode( Number(el) + 97 );
    });
    return ageArr.join('');
}

/* 다른사람의 풀이 */
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v]) // 문자열 자체도 인덱스 접근 가능
    .join("");
}
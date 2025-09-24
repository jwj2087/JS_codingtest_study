function solution(array) {
    let count = 0;

  array.forEach(el => {
    const str = String(el);
    for (const ch of str) {
      if (ch === '7') count++;
    }
  });

  return count;
}

/* 다른사람의 풀이 */
function solution(array) {
    return array.join('').split('7').length-1;
}
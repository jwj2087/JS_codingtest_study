function solution(array) {
    array.sort((a, b) => a - b);
    let mid = Math.floor(array.length / 2 );
    let median;
    if(array.length % 2 === 0 ){
        median = (array[mid] + array[mid-1]) / 2;
    } else {
        median = array[mid];
    }
  
    return median;
}

/* 다른사람의 풀이 */
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

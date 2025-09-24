function solution(array, n) {
    const diffs = array.map(el => ({ // 객체를 값+차이로 
        value: el,
        diff: Math.abs(n - el)
    }));

    const minDiff = Math.min(...diffs.map(item => item.diff)); // 최소값 찾기

    const closestNumbers = diffs
        .filter(item => item.diff === minDiff) // 최솟값 이용해서 같은 차이들만 필터링
        .map(item => item.value); // 해당 값들 모으기 

    return Math.min(...closestNumbers); // 개중에서 제일 작은 값
}


/* 다른사람의 풀이 */
function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b); //걍 정렬하면 해결될 일.. 당연함 index가 아님..

    return array[0];
}
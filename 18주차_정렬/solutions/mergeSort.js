// merge 함수
function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  // 두 배열에서 작은 값부터 결과 배열에 push
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // 남은 요소들 붙이기
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// merge sort
export default function mergeSort(arr) {
  // 길이 1 이하 → 이미 정렬된 상태
  if (arr.length <= 1) return arr;

  // 분할
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 재귀 호출: 분할 → (정렬 → 병합)
  return merge(mergeSort(left), mergeSort(right));
}

// 테스트
console.log(mergeSort([5, 2, 4, 6, 1, 3]));

// 배열을 최대 힙(max-heap)으로 만들고 가장 큰 값을 끝으로 보내면서 힙 크기를 줄여가며 정렬한다.
export default function heapSort(arr) {
  const n = arr.length;

  // 1) 배열을 최대 힙으로 변환 (heapify)
  // 마지막 내부 노드 index는 Math.floor(n/2) - 1
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    siftDown(arr, i, n);
  }

  // 2) 힙에서 루트(최대값)를 끝으로 교환하고 힙 크기를 줄이며 재정렬
  for (let end = n - 1; end > 0; end--) {
    // 루트(최대값)를 맨 끝과 교환
    [arr[0], arr[end]] = [arr[end], arr[0]];
    // 남은 부분(0..end-1)을 다시 max-heap으로 유지
    siftDown(arr, 0, end);
  }

  return arr;
}

// siftDown: 인덱스 'start'에서 시작해 길이 'heapSize'까지 내려가며 자식들과 비교해 최대 힙 속성을 만족하도록 한다.
// 최대힙 생성 함수
function siftDown(arr, start, heapSize) {
  // 배열을 완전이진트리로 보고, 특정 노드에서 시작해 자식들과 비교하면서 내려가 루트가 그 서브트리의 최대값이 되도록 만든다.
  let root = start;

  while (true) {
    const left = 2 * root + 1; // 왼쪽 자식 인덱스
    const right = 2 * root + 2; // 오른쪽 자식 인덱스
    let largest = root; // 현재 루트를 가장 큰 노드로 초기 설정

    // 왼쪽 자식이 존재하고 더 크면 largest 갱신
    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }
    // 오른쪽 자식이 존재하고 더 크면 largest 갱신
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
    // largest === root면 이미 힙 → 종료
    if (largest === root) break;

    // 가장 큰 값과 루트를 교환 후 내려가기
    [arr[root], arr[largest]] = [arr[largest], arr[root]];
    root = largest;
  }
}

// 테스트
const a = [5, 2, 4, 6, 1, 3];
console.log(heapSort(a)); // [1,2,3,4,5,6]

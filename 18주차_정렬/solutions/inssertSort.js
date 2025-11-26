export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // 삽입할 값
    let j = i - 1;

    // current보다 큰 값들을 오른쪽으로 한 칸씩 이동
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // current 값을 올바른 위치에 삽입
    arr[j + 1] = current;
  }
  return arr;
}

// 테스트
console.log(insertionSort([5, 2, 4, 6, 1, 3]));

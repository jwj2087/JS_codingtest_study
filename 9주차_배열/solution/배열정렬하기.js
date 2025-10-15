function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}


// sort 매소드를 사용하지 않는 경우

// 1. 삽입정렬 : 배열을 앞에서부터 하나씩 확인하면서, 현재 원소를 자신이 들어가야 할 위치에 삽입.
// 두 번째 원소부터 시작하며 현재 원소를 왼쪽의 정렬된 부분과 비교하며 왼쪽에 큰 값이 있으면 오른쪽으로 계속 밀어내는 방식
// 시간복잡도 최선 O(n) / 최악 O(n²)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { // 2번째 원소부터 순회 시작
    let key = arr[i];          
    let j = i - 1;

    // 현재 원소보다 큰 원소들을 오른쪽으로 한 칸씩 이동
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 올바른 위치에 현재 원소 삽입
    arr[j + 1] = key;
  }
  return arr;
}

// 2. 선택정렬 : 배열에서 최솟값을 찾아서 맨 앞 원소와 교환하며 정렬
// 배열의 최솟값을 찾아 첫번째 원소와 교환, 그 다음 최솟값을 찾아서 두전째 원소와 교환
// 시간복잡도 O(n²) (모든 경우 항상 n번 선택 & 비교 필요)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // i 이후 원소 중 최소값 찾기
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 최솟값과 교환
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    } 
  }

  return arr;
}

// 3. 버블정렬 : 인접한 두 원소를 비교해서 큰 값을 뒤로 이동
// 첫번째 원소와 두번째 원소를 비교해서 작은 값을 앞으로 보내고 두번째 원소와 세번째 원소를 비교한다. 이를 반복하면 순회가 끝났을때 마지막 원소가 가장 큰 값이 된다.
// 시간복잡도 최선 O(n) (이미 정렬된 경우, 교환 없음 → 한 번만 확인) / 최악: O(n²)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false; // 교환 여부 확인

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 인접 원소 교환
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}
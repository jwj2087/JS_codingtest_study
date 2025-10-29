/** n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때
 * 이 중에서 합이 target인 두 수가 arr에 있는지 찾고,
 * 있으면 true, 없으면 false를 반환하는 solution() 함수를 작성하시오. */

function solution(arr, k) {
  let hash = new Array(k + 1).fill(0);

  for (const num of arr) {
    if (num <= k) {
      hash[num] = 1;
    }
  }

  for (const num of arr) {
    const value = k - num;

    if (value !== num && value >= 0 && value <= k && hash[value] === 1) {
      return console.log(true);
    }
  }

  return console.log(false);
}

solution([1, 2, 3, 4, 8], 6);
solution([2, 3, 4, 9], 10);

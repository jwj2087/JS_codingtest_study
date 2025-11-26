import heapSort from "./heapSort.js";
import insertionSort from "./inssertSort.js";
import mergeSort from "./mergeSort.js";

function measure(fn, fnName, ...args) {
  // 시간 복잡도 계산
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  console.log(`${fnName} 실행 시간: ${(end - start).toFixed(4)} ms`);
  return result;
}

function solution(n) {
  // const [...arr] = n + "";
  // arr.sort((a, b) => b - a);

  // return Number(arr.join(""));
  return n.sort((a, b) => b - a);
}

const data = Array.from({ length: 100000 }, () => Math.random());

measure(solution, "sort", data);
measure(insertionSort, "insert", data);
measure(mergeSort, "merge", data);
measure(heapSort, "heap", data);

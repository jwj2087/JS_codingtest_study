// 간선 리스트 → 인접 리스트 변환
function buildAdjacency(edges) {
  const adj = new Map();
  const add = (u, v) => {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u).push(v);
  };
  for (const [u, v] of edges) {
    add(u, v);
  }
  return adj;
}

/**
 * 너비 우선 탐색 (BFS)
 * @param {Array<Array<string>>} graph - 간선 리스트
 * @param {string} start - 시작 노드
 * @returns {Array<string>} - 방문 순서
 */
function solution(graph, start) {
  const adj = buildAdjacency(graph);
  const visited = new Set();
  const queue = [];
  const order = [];

  if (!adj.has(start)) return order; // 시작 노드가 없을 경우 빈 배열

  // 초기 상태
  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 맨 앞 꺼냄 (FIFO)
    order.push(node);

    const neighbors = adj.get(node) || [];
    for (const nb of neighbors) {
      if (!visited.has(nb)) {
        visited.add(nb);   // 큐에 넣을 때 방문 처리
        queue.push(nb);
      }
    }
  }

  return order;
}

// 🧪 예시 실행
const graph = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
  ["E", "F"],
];

console.log(solution(graph, "A"));
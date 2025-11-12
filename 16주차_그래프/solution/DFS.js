function buildAdjacency(graph) {
  // 인접 리스트 생성 함수
  const adj = new Map();
  const add = (u, v) => {
    if (!adj.has(u)) adj.set(u, []); // 출발하는 노드 생성
    adj.get(u).push(v); // 출발 노드에서 도착 하는 노드 연결
  };

  for (const [u, v] of graph) {
    // 그래프 노드로 인접 리스트 생성
    add(u, v);
  }
  return adj;
}

/**
 * 반복적 DFS (스택 사용)
 * - start: 시작 노드
 * - edges: 간선 리스트
 * 반환: 방문 순서 배열
 */
function solution(graph, start) {
  const adj = buildAdjacency(graph);

  const visited = new Set(); // 방문 노드(중복 방지)
  const stack = [];
  const order = [];

  // 시작 노드가 그래프에 없을 수 있으니 체크
  if (!adj.has(start)) {
    // 그래프에 start만 없으면 start만 방문했다고 치거나 빈 배열 리턴
    return order;
  }

  // 스택에 넣을 때 방문 표시해서 중복 push 방지
  stack.push(start);
  visited.add(start);

  while (stack.length > 0) {
    const node = stack.pop(); // stack에서 꺼내서
    order.push(node); // ㄹㅇ 방문 처리

    const neighbors = adj.get(node) || [];
    // 이웃들을 역순으로 넣으면 재귀 DFS의 '첫번째 이웃 우선' 순서를 흉내낼 수 있음 => 그래야 앞에서부터 꺼낼때 순서가 맞으니까
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const nb = neighbors[i];
      if (!visited.has(nb)) {
        // 한번도 방문한 적 없는 노드면
        visited.add(nb); // push 시점에 한번이라도 방문 처리
        stack.push(nb); // stack에 추가
      }
    }
  }

  return order;
}

solution(
  [
    ["A", "B"],
    ["B", "C"],
    ["C", "D"],
    ["D", "E"],
  ],
  "A"
);
solution(
  [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["B", "E"],
    ["C", "F"],
    ["E", "F"],
  ],
  "A"
);

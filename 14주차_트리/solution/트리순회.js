/** 이진트리를 표현한 배열 nodes를 인자로 받습니다. 해당 이진 트리에 대하여 
 * 전위 순회, 중위 순회, 후위 순회의 결화를 반환하는 solutuion 함수를 구현하세요. */
function preorder(nodes, idx) {
  if(idx < nodes.length) {
    let ret = `${nodes[idx]}`;
    ret += preorder(nodes, idx*2+1);
    ret += preorder(nodes, idx*2+2);
    return ret;
  }

  return "";
}

// function preorder(node){
//   if(node){
//     console.log(node.val);
//     preorder(node.left);
//     preorder(node.right);
//   }
// }

function inorder(nodes, idx) {
  if(idx < nodes.length) {
    let ret = inorder(nodes, idx*2+1);
    ret += `${nodes[idx]}`;
    ret += inorder(nodes, idx*2+2);
    return ret;
  }

  return "";
}

// function inorder(node){
//   if(node){
//     inorder(node.left);
//     console.log(node.val);
//     inorder(node.right);
//   }
// }

function postorder(nodes, idx) {
  if(idx < nodes.length) {
    let ret = inorder(nodes, idx*2+1);
    ret += inorder(nodes, idx*2+2);
    ret += `${nodes[idx]}`;
    return ret;
  }

  return "";
}

// function postorder(node){
//   if(node){
//     postorder(node.left);
//     postorder(node.right);
//     console.log(node.val);
//   }
// }

function solution(nodes) {
  return [
    preorder(nodes, 0),
    inorder(nodes, 0),
    postorder(nodes, 0)
  ]
}

solution([1,2,3,4,5,6,7])

/**
 * 루트 노드는 배열 인덱스 0번에 저장
 * 왼쪽 자식 노드의 배열 인덱스는 "부모 노드의 배열 인덱스*2+1"
 * 오른쪽 자식 노드의 배열 인덱스는 "부모 노드의 배열 인덱스*2+2" */
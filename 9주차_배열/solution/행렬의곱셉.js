function solution(arr1, arr2) {
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    const mul = [];
    for(let i=0; i<r1; i++) { // 2차원 배열 선언
        mul.push(new Array(c2).fill(0));
    }
    
    for(let i=0; i<r1; i++){ // 첫번째 배열 row 순회
        for(let j=0; j<c2; j++) { // 두번째 배열 column 순회
             
            for(let x=0; x<c1; x++){ // 첫번째 배열 column 순회
                mul[i][j] += arr1[i][x] * arr2[x][j]; 
                // 행렬의 곱은 행렬1의 행과 행렬2의 열의 크기가 동일해야한다.
            }
        }
    }
    
    return mul;   
}

/* 다른사람의 풀이 */
function productMatrix(A, B) {
    return A.map(function(row) { // A 행렬의 행을 반복(row)
        return row.map(function(_, i) { // B 행렬의 열(index) 고려
            return row.reduce(function(sum, cell, j) { // A의 현재 행(row)의 요소를 순회하며 가산
                return sum + cell * B[j][i]; 
            }, 0);
        });
    });
}
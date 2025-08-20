function solution(num_list, n) {
    const result = [];
    let columns = n;
    let rows = num_list.length / n;
    let tmp = 0;
    for(let j = 0; j<rows; j++) { // 반복문 돌리면서 하나하나 넣어주기
        result.push([]);
        for(let i = 0; i < columns; i++){
            result[j].push(num_list[tmp]);
            tmp++;
        }
    }
    
    return result;
}

/* 다른사람의 풀이 */
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n)); 
        // splice 메소드는 잘라낸 요소를 반환하니까 잘라서 결과에 바로 집어넣기
    }

    return answer;
}
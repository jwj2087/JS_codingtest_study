function solution(num_list) {
    return num_list.reverse();
} 

/* 다른사람의 풀이 */
// 메소드 사용이 아니라 직접 바꿔넣기
function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}
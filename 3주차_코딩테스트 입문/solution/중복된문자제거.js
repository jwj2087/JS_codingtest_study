function solution(my_string) {
    let my_Arr = [...my_string];
    let result = new Set(); // 중복 방지
    
    for(let i = 0; i<my_Arr.length; i++){
        result.add(my_Arr[i]);
    }
    
    return [...result].join('');
}

/* 지피티한테 Set() 없이 풀어달라고 요청 */
function solution(my_string) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        let ch = my_string[i];
        if (result.indexOf(ch) === -1) { // indexOf를 이용해서 아직 result에 없는 경우만 추가
            result += ch;
        }
    }
    return result;
}
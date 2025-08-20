function solution(i, j, k) {
    let cnt = 0;
    for ( i; i <= j; i++){
        let num = ''+i;
        [...num].forEach(el => {
            if(el == k)
                cnt++;
        })
    }
    
    return cnt;
}

/* 다른사람의 풀이 */
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
    // k를 기준으로 잘라내서 배열을 만들면 split은 기준 문자가 있을 때마다 잘라내므로, 
    // 배열 길이 - 1 = 해당 문자의 등장 횟수

    // 1~13까지 k = 1
    // ["", "23456789", "0", "", "2", "3"]
    // 길이 = 6 → 등장 횟수 = 6 - 1 = 5
}

function solution(my_string) {
    const my_arr = [...my_string];
    
    const isNum = my_arr.map(el => { 
        const num = Number(el);
        if(!isNaN(num)) { // 숫자면 숫자로
            return num;
        } else { // 아니면 a로 전체 치환
            return 'a';
        }
    });
    
    // 문자열 -> 'a'로 나누기 -> 배열 합산
    const result = isNum.join('').split('a').reduce((acc, el) => {
        return acc+Number(el);
    }, 0)
    
    return result;
}
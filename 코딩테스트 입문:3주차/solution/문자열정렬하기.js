function solution(my_string) {
    let my_arr = [...my_string].map(el => el.toLowerCase());
    my_arr.sort();
    return my_arr.join('');
}

/* 다른사람의 풀이 */
function solution(s) {
    return [...s.toLowerCase()].sort().join('')
}

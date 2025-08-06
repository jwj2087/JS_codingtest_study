function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let str = vowels.reduce((acc, el) => {
        return acc.replaceAll(el, '');
    }, my_string);
    return str;
}

/* 다른사람의 풀이 */
// 정규표현식 사용
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, ''); 
}
// includes 사용
function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}

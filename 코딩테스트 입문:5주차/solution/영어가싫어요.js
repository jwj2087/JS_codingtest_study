function solution(numbers) {
    const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numStr.forEach((el, index) => {
        while(numbers.includes(el)) {
            numbers = numbers.replace(el, index);
        }
    });
    
    return Number(numbers);
    
}

/* 다른사람의 풀이 */
// replaceAll 사용
function solution(numbers) {
    let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numStr.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}
function solution(numbers, direction) {
    let deleted;
    if(direction === 'right'){
        deleted = numbers.pop();
        numbers.unshift(deleted);
    } else {
        deleted = numbers.shift();
        numbers.push(deleted);
    }
    
    return numbers;
}

// 구조분해 응용
function solution(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}
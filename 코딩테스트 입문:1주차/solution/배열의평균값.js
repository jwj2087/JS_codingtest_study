function solution(numbers) {
    const sum = numbers.reduce((acc, el) => {
        return acc + el;
    }, 0)
    
    return sum/numbers.length;
}
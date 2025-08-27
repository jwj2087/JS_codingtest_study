function solution(numbers, k) {
    let i = (k-1)*2; 
    while( i > numbers.length){
        i -= numbers.length;
    }
    
    return numbers[i];
}
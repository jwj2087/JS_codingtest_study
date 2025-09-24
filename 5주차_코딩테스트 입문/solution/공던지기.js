function solution(numbers, k) {
    let i = (k-1)*2; // 공을 던지는 사람이 있는 인덱스 값
    while( i > numbers.length){ // 넘치면 
        i -= numbers.length; // 넘치지 않을때까지 인덱스 줄이기
    }
    
    return numbers[i];
}
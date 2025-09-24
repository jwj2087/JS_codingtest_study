/*
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
*/
function solution(n) {
    const divisor = new Set();
    for(let i = 1; i <= n; i++){ // 그냥 n부터 1까지 나누기
        if(n%i == 0 ){
            divisor.add(`${i}, ${n/i}`); // 중복쌍이 안 들어가게 Set() 사용
        }
    }
    return divisor.size;
}
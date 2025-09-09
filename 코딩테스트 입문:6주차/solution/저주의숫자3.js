function solution(n) {
  let result = n + Math.floor(n / 3);
  if (n % 3 === 0) result++;

  // 현재 숫자보다 작은 3이 들어가는 수만큼 더하기

  while (result % 3 === 0) result++;
}

// 스터디 이후 고친 코드
function solution(n) {
    let arr = [];
    for(let i = 1; i <= n*3; i++){ // 3의 배수가 없는 3배크기의 배열 생성
        if(i%3 !== 0)
            arr.push(i);
    }
    
    const result = arr.filter(el => { // 그 중 3을 포함하지 않는 숫자만 filter
        const num = el+"";
        return !num.includes('3');
    })
    
    return result[n-1]; // 해당 인덱스가 그 숫자 
}
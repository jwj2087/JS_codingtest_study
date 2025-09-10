function solution(A, B) {
    const str = [...A];
    
    for(let i=0; i<str.length; i++){
        if(str.join('') === B) // 동일하면
            return i; // i = 반복횟수 리턴
        let last = str.pop(); // 마지막 char 빼기
        str.unshift(last); // 마지막 char 맨 앞에 추가
    }
    
    return -1; 
} 

/* 다른사람의 풀이 */
let solution=(a,b)=>(b+b).indexOf(a)
/** A: hello, B: ohell 인 경우
 * b+b = ohellohell 에서 hello가 있다면 그 index가 반복횟수..
 * 없으면 -1
 */
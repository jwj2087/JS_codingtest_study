function solution(emergency) {
    const emer = [...emergency];
    emer.sort((a,b) => b-a); // 순서대로 정렬
    // 정렬된 index+1를 찾으면 순위가 된다.
    const result = emergency.map(el => emer.indexOf(el)+1);
    
    return result;
}
function solution(score) {
    const avg = score.map(el => el.reduce((acc, sc) => { // 평균값 배열
        return (acc+sc)/2; 
    }))
    
    const sort = [...avg].sort((a,b) => b-a); // 평균값 정렬 = 등수
    const result = avg.map((el) => sort.indexOf(el)+1) // 해당 index 앞에서부터 반환
    
    return result;
}
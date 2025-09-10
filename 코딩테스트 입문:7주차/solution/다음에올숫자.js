function solution(common) {
    let diff1 = common[1]-common[0];
    let diff2 = common[2]-common[1];
    
    if(diff1 === diff2) // 차가 동일하면 등차수열
        return common[common.length-1] + diff1;
    
    let ratio = common[1]/common[0]; // 공비 구하기
    
    return common[common.length-1]*ratio;
}
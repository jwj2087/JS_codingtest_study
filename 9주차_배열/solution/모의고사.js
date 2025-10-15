function solution(answers) {
    const pattern = [ // 수포자 패턴
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
    const score = [0,0,0]; // 점수
    
    for(let i=0; i<pattern.length; i++){
        const len = pattern[i].length;
        for(let j=0; j<answers.length; j++){
            
            if(pattern[i][j%len] === answers[j]){ // 패턴의 길이보다 답안이 긴 경우를 위해 나머지를 이용
                score[i] += 1;
            }
        }
    }

    const max = Math.max(...score);
    
    const result = [];
    
    for(let i=0; i<score.length; i++){
        if(score[i] === max)
            result.push(i+1);
    }
    
    return result;
}
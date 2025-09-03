function solution(dots) {
    const x = new Set();
    const y = new Set();
    
    for(let i = 0; i<dots.length; i++){
        x.add(dots[i][0]);
        y.add(dots[i][1]);
    };
    
    const width = [...x].reduce((acc, el)=>{
        return el-acc;
    }, 0);
    
    const height = [...y].reduce((acc, el)=>{
        return el-acc;
    }, 0);
    
    return Math.abs(width*height);
}

/* 다른사람의 풀이 */
function solution(dots) {
    let x = [],
        y = [];

    for (let pos of dots) {
        x.push(pos[0]);
        y.push(pos[1]);
    }
    // 그냥 최대값-최솟값
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}

// 같은 Set 사용인데 더 깔끔한 코드
const solution = dots => {
    const x = [...new Set(dots.map(p => p[0]))]
    const y = [...new Set(dots.map(p => p[1]))]
    return Math.abs((x[0] - x[1]) * (y[0] - y[1]))
}
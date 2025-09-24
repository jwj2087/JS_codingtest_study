function solution(lines) {
    const line1Max = Math.max(lines[0][0], lines[0][1]);
    const line1Min = Math.min(lines[0][0], lines[0][1]);
    
    console.log(line1Min);
    for(let i=1; i<lines.length; i++) {
        for(let j=0; j<2; j++) {
            const point = lines[i][j];
            if(point >= lines[0][0] && point <= lines[0]){}
        }
    }
}
// ... 
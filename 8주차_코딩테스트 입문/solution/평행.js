function getGrade (point1, point2) {
    const w = point1[0] - point2[0];
    const y = point1[1] - point2[1];
    
    return w === 0 ? -1 : y === 0 ? 0 : y/w;
}

function solution(dots) {
    const grade = [];
    for(let i=0; i<dots.length; i++) {
        for(let j=i+1; j<dots.length; j++){
            grade.push(getGrade(dots[i], dots[j]));
        }
    }
    console.log(grade);
    const gradeSet = new Set(grade); // 동일한 값이 있는지 확인용
    
    return grade.length === gradeSet.size ? 0 : 1;
}
function solution(box, n) {
    const width = Math.floor(box[0]/n);
    const depth = Math.floor(box[1]/n);
    const height = Math.floor(box[2]/n);
    
    return width*depth*height;
}

/* 다른사람의 풀이 */
// 구조분해 할당
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}
// reduce 이용 
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}
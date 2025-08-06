function solution(array, height) {
    const heigh = array.filter((el) => {
        return el > height;
    });
    return heigh.length;
}
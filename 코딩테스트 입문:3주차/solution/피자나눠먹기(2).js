function solution(n) {
    let pizza = 1; 
    let slice = 6;
    while ( slice % n !== 0 ){
        pizza++;
        slice = pizza * 6;
    }
    return pizza;
}
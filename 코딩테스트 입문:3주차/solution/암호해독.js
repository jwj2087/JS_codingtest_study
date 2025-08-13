function solution(cipher, code) {
    const result = [...cipher].filter((el, i) => {
        return (i+1)%code === 0; // filter 메소드 index 이용
    })
    return result.join(''); // string 변환
}


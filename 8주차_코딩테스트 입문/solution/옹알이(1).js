function solution(babbling) {
    const baby = ["aya", "ye", "woo", "ma"];
    
    let count = 0;

    for (let i=0; i<babbling.length; i++) {
        let word = babbling[i];
        
        // baby 단어 제거
        for (let j=0; j<baby.length; j++) {
            const b = baby[j];
            word = word.split(b).join("1"); // 중간이 삭제되면 같은 단어가 되는 경우 분리
        }
        
        console.log(word.split("1").join(""));

        if (word.split("1").join("") === "") count++;
    }

    return count;
}

/* 다른사람의 풀이 */
// 역시 정규식..
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}

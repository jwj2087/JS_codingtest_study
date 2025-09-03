// 내 풀이 -> 테스트는 어떻게 통과함...근데 테스트 자체가 문제가 있는지 잘못된 풀이법도 올라가 있음
function solution(spell, dic) {
    const result = [];

    for(let i=0; i<spell.length; i++){
        dic.forEach(el => { // 반복문을 두 번
            // indexOf 방법으로 spell이 하나만 있는지 확인
            // 이 경우는 없는 경우를 찾아낼 수 없음. 없을시엔 둘다 -1 반환
            if(el.indexOf(spell[i]) === el.lastIndexOf(spell[i])) 
                result.push(true); 
            else 
                result.push(false);
        })
    }
    
    return result.every(el => el===true) ? 1 : 2 
}

// 지피티가 정리해준 코드
function solution(spell, dic) {
  const target = spell.sort().join(""); // spell을 정렬해서 하나의 문자열로 합치기 -> 이 단어가 포함되는지를 확인하면 됨
  // dic의 단어도 정렬 -> target 문자가 있는지 확인 -> 일치하는게 없다면 조건을 만족하지 않는다
  return dic.some(word => word.split("").sort().join("") === target) ? 1 : 2; 
}

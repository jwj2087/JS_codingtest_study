function solution(id_pw, db) {
    let result;
    db.forEach(el => {
        if(el[0]===id_pw[0] && el[1]===id_pw[1])
            return result="login";
        else if(el[0]!==id_pw[0])
            return;
        else if(el[0]===id_pw[0] && el[1]!==id_pw[1])
            return result="wrong pw";
        
    })
    if(result === undefined)
        return result="fail";
    
    return result;
}

/* 다른사람의 풀이 */
// map 이용하기
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
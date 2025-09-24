function solution(board) {
    let l = board.length;
    let bomb_location = new Array();
    let boardBox = 0;
    board.forEach((arr, i) => {
        arr.forEach((bomb, j) => {
            if (bomb === 1) 
                bomb_location.push([i,j]);
            boardBox++;
        })
    })
    
    const dangerZone = new Set();
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 0], [0, 1],
      [1, -1], [1, 0], [1,1]
    ];
    
    bomb_location.forEach(([x,y]) => {
       directions.forEach(([dx, dy]) => {
          const zx = x+dx;
          const zy = y+dy;
          if(zx >= 0 && zx < l && zy >=0 && zy < l){
              dangerZone.add(`${zx}, ${zy}`);
          }
       });
    });
    return boardBox-dangerZone.size;
}
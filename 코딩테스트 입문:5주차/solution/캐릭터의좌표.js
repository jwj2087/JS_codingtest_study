function solution(keyinput, board) {
    const move = {
        up: [0,1],
        down: [0,-1],
        left: [-1,0],
        right: [1,0],
    };
    
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value)); // 범위까지 체크하기

    const halfX = Math.floor(board[0] / 2); // 범위
    const halfY = Math.floor(board[1] / 2); // 범위

    const location = keyinput.reduce((acc, el) => {
        const x = clamp(acc[0] + move[el][0], -halfX, halfX);
        const y = clamp(acc[1] + move[el][1], -halfY, halfY);
        return [x, y];
    }, [0,0]);

    return location;
}
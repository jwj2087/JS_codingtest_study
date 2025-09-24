function solution(number) {
  const add = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      add.push(number[i] + number[j]);
    }
  }

  const set = new Set(add);

  return [...set].sort((a, b) => a - b);
}

console.log(solution([5,0,2,7]));
function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  while (goal.length > 0) {
    if (cards1[i] === goal[0]) {
      goal.shift();
      i++;
    } else if (cards2[j] === goal[0]) {
      goal.shift();
      j++;
    } else {
      return "No";
    }
  }

  return "Yes";
}

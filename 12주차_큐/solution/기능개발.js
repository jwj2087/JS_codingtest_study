function solution(progresses, speeds) {
  const day = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i])); // 남은 날
  const result = [];

  let max = day[0]; // 최고일수
  let count = 1;

  for (let i = 1; i < day.length + 1; i++) {
    if (day[i] <= max) {
      // 최고일수 보다 작은 경우 count 증가
      count++;
    } else {
      result.push(count);
      max = day[i]; // 최고일수 변경
      count = 1;
    }

    // console.log("max=> ", max);
    // console.log("i=> ", i);
    // console.log("count=> ", count);
  }

  // console.log(result);
  return result;
}

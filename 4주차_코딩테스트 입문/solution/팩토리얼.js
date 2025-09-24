function solution(n) {
  let fact = 1;
  let i = 1;

  while (fact * (i + 1) <= n) { 
    i++;
    fact *= i;                  
  }

  return i;
}
function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
    
    return sum.toString(2);
}

// 직접 비트 연산
function addBinaryBitwise(a, b) {
  let x = BigInt("0b" + a);
  let y = BigInt("0b" + b);
  
  while (y !== 0n) {
    let carry = x & y;   // 올림 계산
    x = x ^ y;           // 더하기 (자리수 합)
    y = carry << 1n;     // 올림을 왼쪽으로 이동
  }
  return x.toString(2);
}

// 직접 2진수 덧셈 실행 
function addBinaryManual(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? +a[i--] : 0) +
                (j >= 0 ? +b[j--] : 0) +
                carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}

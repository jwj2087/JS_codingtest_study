function solution(chicken) {
  let coupon = chicken; // 치킨 갯수만큼 생긴 쿠폰
  let get = 0; // 쿠폰으로 얻은 치킨
  while (coupon > 9) { // 쿠폰이 9이상일 동안 반복
    let newChicken = Math.floor(coupon / 10); // 이번에 바꾼 치킨 수
    get += newChicken; // 서비스 치킨 누적
    coupon = newChicken + (coupon % 10); // 바꾼 치킨 쿠폰 + 남은 쿠폰 <- 남은 쿠폰을 따로 관리해라.(지피티 조언)
  }

  return get;
}

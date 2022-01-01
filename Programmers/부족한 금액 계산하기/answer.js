let price = 3;
let money = 20;
let count = 4;

function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i < count + 1; i++) {
    sum += price * i;
  }
  let answer = sum - money;
  return money > sum ? 0 : answer;
}
console.log(solution(price, money, count));

//정확성 95.7%
// 마지막 돈이 부족하지 않는 경우를 두었더니, 정확성 100프로로 될수 있었다.(단, 금액이 부족하지 않으면 0을 return 하세요.) money > sum ? 0 : answer; 이 부분을 수정

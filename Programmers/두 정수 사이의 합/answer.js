let a = 2;
let b = 4;

function solution(a, b) {
  let c = b - a;
  let sum = 0;
  if (c < 0) {
    c = c * -1;
  }
  for (let i = 1; i < c; i++) {
    if (a < b) {
      sum += a + 1;
    } else {
      sum += b + 1;
    }
  }
  if (a === b) {
    sum = a;
  } else {
    sum += a + b;
  }
  return sum;
}

console.log(solution(a, b));
//아니 답이 나오는데, 왜 오류가 나징?
//참고 한 답
function solution(a, b) {
  var answer = 0;

  if (a <= b) {
    for (let i = a; i <= b; i++) {
      answer = answer + i;
    }
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer = answer + i;
    }
  }
  return answer;
}

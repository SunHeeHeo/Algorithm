let n = 10;

function solution(n) {
  let nCnt = 0;
  for (let i = 2; i < n + 1; i++) {
    let cnt = 0;
    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        cnt += 1;
      }
    }
    if (cnt == 2) {
      nCnt += 1;
    }
  }
  console.log(nCnt);
  return nCnt;
}
solution(n);
//정확성 56.3
//효용성 0
//합계 56.3 ㅠㅠ why?
//다른분의 답
function solution(n) {
  var arr = [];
  var cnt = 0;
  for (var i = 0; i < n + 1; i++) {
    arr.push(true);
  }

  for (var i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (var j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) cnt++;
  }

  return cnt++;
}

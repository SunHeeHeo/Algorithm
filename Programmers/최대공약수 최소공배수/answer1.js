let n = 2;
let m = 5;

function solution(n, m) {
  let arrN = [];
  let arrM = [];
  let min;
  let max;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      arrN.push(i);
    }
  }
  arrN.push(n);
  for (let j = 0; j < m; j++) {
    if (m % j === 0) {
      arrM.push(j);
    }
  }
  arrM.push(m);

  if (arrM[arrM.length - 1] > arrN[arrN.length - 1]) {
    if (arrM[arrM.length - 1] % arrN[arrN.length - 1] === 0) {
      min = arrM[arrM.length - 1];
    }
  } else {
    if (arrN[arrN.length - 1] % arrM[arrM.length - 1] === 0) {
      min = arrN[arrN.length - 1];
    }
  }
  if (!min) {
    min = arrN[arrN.length - 1] * arrM[arrM.length - 1];
  }
  let result = arrN.filter((e) => arrM.includes(e));
  max = result[result.length - 1];
  let answer = [];
  answer.push(max, min);
  console.log(answer);
  return answer;
}
solution(n, m);
//ㅠㅠ 난 아직 멀었다..ㅋㅋ

//참고 답안
function solution(n, m) {
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

function gcd(a, b) {
  // 단, a가 b보다 커야함.
  let R;
  while (a % b > 0) {
    R = a % b; //나머지
    a = b;
    b = R;
  }
  return b;
}
/*최대공약수 : 유클리드 호제법
최소 공배수 : input으로 주어진 자연수 2개를 곱하고, 최대 공약수를 나누는 방식
*/

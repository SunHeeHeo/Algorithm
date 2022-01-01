let dartResult = "1S2D*3T";
let S = dartResult.indexOf("S");
let D = dartResult.indexOf("D");
let T = dartResult.indexOf("T");
let star = dartResult.indexOf("*"); //여러개 나올수 있음
let aCha = dartResult.indexOf("#");
console.log(S, D, T);
let result;
result =
  dartResult[S - 1] * 1 + dartResult[D - 1] ** 2 + dartResult[T - 1] ** 3;
for (let i = 0; i < dartResult.length; i++) {
  if (i == aCha) {
  }
}
if (star < 4) {
  console.log(1);
  result =
    dartResult[S - 1] ** 1 * 2 +
    dartResult[D - 1] ** 2 +
    dartResult[T - 1] ** 3;
} else if (star < dartResult.length - 2) {
  console.log(2);
  result =
    dartResult[S - 1] ** 1 * 2 +
    dartResult[D - 1] ** 2 * 2 +
    dartResult[T - 1] ** 3;
} else {
  console.log(3);
  result =
    dartResult[S - 1] ** 1 +
    dartResult[D - 1] ** 2 * 2 +
    dartResult[T - 1] ** 3 * 2;
}
console.log(result);
//시간이 너무 길어질꺼 같아 그냥 답을 보기로 했다..ㅎㅎ
//뭐 가다가 이건 아닌거 같은 너낌?

//다른 분이 푸신 것

function solution(dartResult) {
  var num = 0;
  var answer = [];
  var temp = 0;
  for (var i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      //i 가 0보다 크고, 9보다 작을때,
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      answer.push(temp);
    } else if (dartResult[i] === "D") {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] == "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (var i = 0; i < answer.length; i++) {
    num += Number(answer[i]);
  }
  return num;
}

//결론은 답을 보면 알겠는데, 문제를 많이 풀어야 할 것 같다! 반복해서 풀어 볼 것! 내 것이 될때까지

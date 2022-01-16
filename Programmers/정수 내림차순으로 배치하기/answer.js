let n = 118372;

function solution(n) {
  n = n.toString().split("");
  n.sort();
  let answer = n.reverse().join("");
  answer = Number(answer);
  console.log(answer);
  return answer;
}
solution(n);

//성공!

let n = "7 3 9 5 6 12";

function solution(n) {
  n = n.split(" ");
  let answer = [];
  answer.push(n[0]);
  for (let i = 1; i < n.length; i++) {
    if (Number(n[i]) > Number(n[i - 1])) {
      answer.push(n[i]);
    } else {
      continue;
    }
  }
  answer = answer.join(" ");
  return answer;
}
solution(n);

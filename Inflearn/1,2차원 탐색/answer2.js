let n = "130 135 148 140 145 150 150 153";
function solution(n) {
  n = n.split(" ");
  let answer = 0;
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] < n[i + 1]) {
      answer++;
    } else {
      continue;
    }
  }
  console.log(answer);
  return answer;
}

solution(n);

let n = 4;
function solution(n) {
  let answer;
  let i = 0;
  while (true) {
    if (i ** 2 === n) {
      answer = (i + 1) ** 2;
      break;
    } else {
      answer = -1;
    }
    i++;
    if (i > n) {
      break;
    }
  }
  return answer;
}
solution(n);

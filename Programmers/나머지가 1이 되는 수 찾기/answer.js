function solution(n) {
  let answer;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}

console.log(answer);

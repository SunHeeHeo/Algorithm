let n = 12;

function solution(n) {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
solution(n);

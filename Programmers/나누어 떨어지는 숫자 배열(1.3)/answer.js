let arr = [3, 2, 6];
let divisor = 10;

function solution(arr, divisor) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  console.log(answer.length);
  if (!answer.length) {
    answer.push(-1);
  }
  return answer;
}
console.log(solution(arr, divisor));

let numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  var answer = [];
  return answer;
}
numbers = numbers.sort(function (a, b) {
  // 오름차순
  return a - b;
});

console.log(numbers);
let results = [];
let result;
for (let i = numbers.length - 1; i > -1; i--) {
  console.log(i);
  for (let j = numbers.length - 1; i > -1; i--) {
    if (j < 1) {
      break;
    }
    result = numbers[i] + numbers[j - 1];
    console.log("1", result);
    results.push(result);
  }
}
console.log(results);

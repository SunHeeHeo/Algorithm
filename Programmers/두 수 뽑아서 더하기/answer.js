/*소요시간 약 40분*/

let numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  let results = [];
  let result;
  numbers = numbers.sort(function (a, b) {
    // 오름차순
    return a - b;
  });
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else if (j < i) {
        continue;
      } else if (i + 1 > numbers.length) {
        break;
      }
      result = numbers[i] + numbers[j];
      results.push(result);
    }
  }
  results = results.sort(function (a, b) {
    // 오름차순
    return a - b;
  });
  const resultsUnique = results.filter((val, idx) => {
    return results.indexOf(val) === idx; // 값이 처음 나오는 배열 인덱스와 현재 인덱스가 같으면 포함
  });
  return resultsUnique;
}
console.log(solution(numbers));

//한번에 성공 했다 :)
